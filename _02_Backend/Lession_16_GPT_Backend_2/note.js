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
    // ! index: true in Mongoose tells MongoDB to create an index on that field. An index makes searching, filtering, and sorting on that field much faster.

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



