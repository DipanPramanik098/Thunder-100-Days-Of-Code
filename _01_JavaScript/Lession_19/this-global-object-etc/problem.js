// =====================================================
// * call(), apply() and bind()
// =====================================================

const user1 = {
    name: "Dipan",
    age: 21,
    amount: 1000,
};

const user2 = {
    name: "Pramanik",
    age: 24,
    amount: 2000,
};


// * this refers to the object that calls the function.

function increment(umar, paisa) {

    this.age = umar;
    this.amount += paisa;

    console.log(this);
}


// =====================================================
// * call()
// =====================================================

// * call() invokes the function immediately.
// * Arguments are passed separately.

increment.call(user1, 30, 300);

/*

Output

{
    name: "Dipan",
    age: 30,
    amount: 1300
}

*/


// =====================================================
// * apply()
// =====================================================

// * apply() also invokes the function immediately.
// * Arguments are passed as an array.

increment.apply(user1, [35, 200]);

/*

Output

{
    name: "Dipan",
    age: 35,
    amount: 1500
}

*/


// =====================================================
// * bind()
// =====================================================

// * bind() DOES NOT execute immediately.
// * It returns a new function with fixed this.

const ref = increment.bind(user1, 40, 500);

// ! Nothing happens until we call ref()

ref();

/*

Output

{
    name: "Dipan",
    age: 40,
    amount: 2000
}

*/


// =====================================================
// ? Difference
// =====================================================

// call()
// * Executes immediately.
// * Arguments -> Separate values.

// apply()
// * Executes immediately.
// * Arguments -> Array.

// bind()
// * Returns a new function.
// * Execute later.


// =====================================================
// * Arrow Function and this
// =====================================================

// ! Arrow functions DO NOT have their own this.
// * They inherit this from their surrounding scope.

const usr = {

    name: "Dipan",
    age: 21,

    increment: () => {

        this.age++;
    }

};

usr.increment();

console.log(usr.age); // 21


// ? Why didn't age become 22?

// * Because 'this' inside an arrow function
// * does NOT refer to usr.

// * It refers to the surrounding scope
// * (global/module scope).


// =====================================================
// * Correct Way
// =====================================================

const user = {

    name: "Dipan",
    age: 21,

    increment() {

        this.age++;
    }

};

user.increment();

console.log(user.age); // 22
