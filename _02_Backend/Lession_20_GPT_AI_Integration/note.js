// ! type: mongoose.Schema.Types.ObjectId
{
    /**
     * * In Mongoose, type: mongoose.Schema.Types.ObjectId means that the field stores a MongoDB ObjectId, which is typically used to reference another document in a different collection.
     * * For example:
     * * const postSchema = new mongoose.Schema({
     * *    title: String,
     * *        author: {
     * *            type: mongoose.Schema.Types.ObjectId,
     * *            ref: "User"
     * *        }
     * *    });
     * * Here's what each part means:
    
     * * type: → Specifies the data type of the field.
     * * mongoose.Schema.Types.ObjectId → The field stores a MongoDB ObjectId (a unique 24-character hexadecimal ID).
     * * ref: "User" → Tells Mongoose that this ObjectId refers to a document in the User collection.
     */
}

// ! index = true
{
    // * index: true in Mongoose tells MongoDB to create an index on that field. An index makes searching, filtering, and sorting on that field much faster.

    // Example
    // const userSchema = new mongoose.Schema({
    //   email: {
    //     type: String,
    //     index: true
    //   }
    // });

    // This creates an index on the email field.

    // Without an index

    // When you run:

    // await User.findOne({ email: "abc@gmail.com" });

    // MongoDB has to check every document in the collection until it finds a match (collection scan).

    // User Collection
    // ---------------
    // 1. Rahul
    // 2. Amit
    // 3. Priya
    // 4. John
    // 5. abc@gmail.com  ✅

    // Time complexity is approximately O(n).

    // With index: true

    // MongoDB maintains a special data structure (similar to a B-tree) for the indexed field.

    // Email Index
    // -----------
    // abc@gmail.com  --> Document 5
    // amit@gmail.com --> Document 2
    // john@gmail.com --> Document 4
    // ...

    // Now MongoDB can quickly locate the document instead of scanning the whole collection.

    // Time complexity is approximately O(log n).

    // Common Example
    // const userSchema = new mongoose.Schema({
    //   username: {
    //     type: String,
    //     index: true
    //   },
    //   email: {
    //     type: String,
    //     unique: true,
    //     index: true
    //   }
    // });
    // username → Faster searches.
    // email → Faster searches and no duplicate email addresses (because of unique: true).
    // index vs unique
    // email: {
    //   type: String,
    //   index: true
    // }
    // ✅ Improves query speed.
    // ❌ Allows duplicate values.
    // email: {
    //   type: String,
    //   unique: true
    // }
    // ✅ Creates a unique index.
    // ✅ Prevents duplicate values.
    // ✅ Also improves query speed.
}

// ! sparse
{
    //     In Mongoose / MongoDB, sparse: true means:

    // Create an index only for documents where the field exists.

    // This is especially useful when the field is optional.

    //         Example
    //     const userSchema = new mongoose.Schema({
    //         email: {
    //             type: String,
    //             unique: true,
    //             sparse: true
    //         }
    //     });
    // Without sparse: true

    // Suppose you have these documents:

    //     { name: "Alice", email: "alice@gmail.com" }
    //     { name: "Bob" }
    //     { name: "Charlie" }

    // Since email is missing for Bob and Charlie, MongoDB treats both as null in a unique index.

    // The second missing email causes an error like:

    // E11000 duplicate key error

    // because it sees:

    //     null
    //     null   ❌ Duplicate
    // With sparse: true
    //     email: {
    //         type: String,
    //             unique: true,
    //                 sparse: true
    //     }

    // Now MongoDB indexes only documents that actually have an email field.

    // So these are valid:

    //     { name: "Alice", email: "alice@gmail.com" }
    //     { name: "Bob" }
    //     { name: "Charlie" }

    // The index contains only:

    // alice @gmail.com

    // Bob and Charlie are not indexed, so there is no duplicate null problem.
}

// ! process.env
{
    // * process.env হলো Node.js - এর একটি built -in object, যেটার মাধ্যমে আমরা environment variables access করি।
}

// ! status code
{
    //   * যখন client(frontend) আর server(backend) এর মধ্যে communication হয়, তখন server শুধু data পাঠায় না, সাথে একটা status code পাঠায়।

    // Status code বলে:

    //     "তোমার request-এর সাথে backend-এ কী হয়েছে?"

    //     Example

    // ধরো তুমি login করলে:

    // Frontend request:

    //     POST / api / login

    //     Backend:

    //     {
    //         message: "Login successful"
    //     }

    // কিন্তু frontend জানবে কীভাবে যে login সত্যিই successful ?

    //         তাই server পাঠায়:

    // Status Code: 200

    //     মানে:

    // সব ঠিক আছে
    // Status Code কোথায় থাকে ?

    //         HTTP Response - এর মধ্যে:

    //     HTTP / 1.1 200 OK

    //     {
    //         message: "Login successful"
    //     }

    //     এখানে:

    //     200

    // হলো status code।

    // কেন শুধু message দিলেই হয় না ?

    //         ধরো backend পাঠালো:

    //     {
    //         "message": "User not found"
    //     }

    // এখন frontend কী বুঝবে ?

    //         এটা কি:

    // Server error ?
    //         User ভুল email দিয়েছে ?
    //             Network problem ?

    //                 কিছুই বোঝা যাবে না।

    //     তাই:

    //     404 Not Found

    // দিলে frontend বুঝবে:

    //     "Data পাওয়া যায়নি"
}

// ! Token
{
    // *    Token হলো একটি digital identity card, যেটা server - কে বলে "এই request কে পাঠিয়েছে"।

    // HTTP request সাধারণত stateless।

    //     মানে:

    // Server মনে রাখে না যে তুমি আগে login করেছিলে কি না।

    // তাই login করার পরে user - কে একটা token দেওয়া হয়, যেটা পরের প্রতিটি request - এর সাথে পাঠানো হয়।

    // Without Token কী সমস্যা ?

    //         ধরো একটি website:

    //     Frontend
    //         |
    //    |
    //         Backend

    // তুমি login করলে:

    //     Email: dipan @gmail.com
    //     Password: 12345

    // Server check করলো:

    //     Correct ✅

    // এখন তুমি profile দেখতে চাও:

    //     GET / profile

    // কিন্তু server প্রশ্ন করবে:

    // তুমি কে ?

    //         কারণ HTTP request আলাদা আলাদা।

    // Server জানে না:

    // এই request কি Dipan পাঠিয়েছে ?
    //         নাকি অন্য কেউ ?
    //             Solution : Token

    // Login successful হলে server তৈরি করে:

    //     Token

    //     Example:

    // eyJhbGciOiJIUzI1NiIsInR5cCI6...

    // এটা user - কে দেওয়া হয়।

    //     Flow:

    //     Login

    //     Frontend----------------> Backend

    //     email + password


    //     Backend:

    // Check user

    //         |
    //         |
    //         ↓

    // Create Token


    //     Backend----------------> Frontend

    //     Token

    // পরের request:

    //     GET / profile

    // Frontend পাঠাবে:

    //     Authorization:
    // Bearer token

    //     Backend:

    // Token verify

    //         |
    //         |
    //         ↓

    // User identify

    //         |
    //         |
    //         ↓

    // Return data
    // JWT Token কী ?

    //         সবচেয়ে বেশি ব্যবহার হয়:

    // JSON Web Token(JWT)

    // একটি JWT দেখতে:

    //     xxxxx.yyyyy.zzzzz

    //     এর ৩টি অংশ:

    //     Header.Payload.Signature
    //     1. Header

    // বলছে token কোন algorithm ব্যবহার করছে।

    //     Example:

    //     {
    //         "alg": "HS256",
    //             "typ": "JWT"
    //     }
    //     2. Payload

    // এখানে user information থাকে।

    //     Example:

    //     {
    //         "userId": "12345",
    //             "email": "dipan@gmail.com"
    //     }
    //     3. Signature

    // এটা security অংশ।

    // Server একটি secret key দিয়ে বানায়।

    //     Example:

    //     MY_SECRET_KEY

    // যদি কেউ payload change করে:

    //     userId: 999

    // Signature match করবে না।

    // তখন server বুঝবে:

    // Token invalid ❌
}

// ! res.cookie
{
    // *   res.cookie() হলো Express.js - এর একটি method, যেটা ব্যবহার করে backend থেকে browser / client - এর কাছে cookie পাঠানো হয়।

    // সহজ ভাষায়:

    // Server যখন user - কে কোনো ছোট data browser - এ store করতে দেয়, তখন res.cookie() ব্যবহার করে।

    // Cookie কী ?

    //         Cookie হলো browser - এর মধ্যে রাখা ছোট একটা data storage।

    //     Example:

    //     Browser
    //         |
    //  |
    //         Cookie
    //         |
    //  ├── token
    //  ├── user preference
    //  └── session id
    // Basic Example

    //     Backend:

    //     res.cookie(
    //         "name",
    //         "Dipan"
    //     );

    // এখন browser - এ save হবে:

    //     name = Dipan

    // পরের request - এ browser automatically পাঠাবে:

    //     Cookie:
    //     name = Dipan
}
