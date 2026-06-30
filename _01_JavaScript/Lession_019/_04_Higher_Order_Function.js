// =====================================================
// * Higher Order Function + Closure
// =====================================================

// * increment() returns another function.
// ! Therefore, it is a Higher Order Function.

function increment(amount) {

    // * mul() remembers 'amount' from increment().
    // ! This is called a Closure.

    function mul(num) {
        console.log(num * amount);
    }

    return mul;
}


// * increment(30) returns mul()
// * amount = 30 is remembered.

const multiplier = increment(30);

// * num = 20
// * amount = 30

multiplier(20); // 600


// * Direct function call.

increment(30)(10); // 300


// ? Why does it work?

// * Because mul() remembers 'amount'
// * even after increment() has finished.

// =====================================================
// ! Interview
// =====================================================

// * increment() → Higher Order Function
// * mul() → Closure