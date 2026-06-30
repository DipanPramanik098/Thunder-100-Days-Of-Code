// let balance = 200;

// i want to make the balance private--

// const user = {
//     balance :1000,
//     credit: function(amount){
//         if(typeof amount == "number")
//             this.balance += amount;
//     },
//     debit: function debit(a){
//         if(typeof a == "number" && a <= this.balance)
//         this.balance -= a;
//     },
//     checkBalance: function (){
//         return this.balance;
//     }
// }


// user.credit(5000);
// console.log(user.checkBalance());


// user.balance = "Dipan" // ! Directly accessable

// * use function
// function bank(){
//     let balance = 2999;

//     function credit(amount){
//         if(typeof amount == "number") balance+=amount;
//         console.log(balance);
//     }

//     function debit(amount){
//         if(typeof amount == 'number' && amount <= balance)
//             balance-=amount;
//     }

//     function checkBalance(){
//         console.log(balance);
//     }
//     // return [credit, debit, checkBalance];  //? Array Form return
//     // TODO -- return in object form
//     return {
//         credit : credit,
//         debit : debit,
//         balance : checkBalance
//     }

//     // ? if key value same 
//     // return {
//     //     credit,
//     //     debit,
//     //     checkBalance
//     // }
// }
// const BANK = bank();
// // * Now We Can't access balance directly
// // BANK[1](100); // ? Array Form

// // * Object Form 
// BANK.credit(1999);
// BANK.balance();
// BANK.debit(998);
// BANK.balance();


// -------------------------------------------------------------------------------------------------------


function bank() {

    let balance = 200;

    return {

        credit: function (amount) {

            if (typeof amount === "number") {
                balance += amount;
            }

        },

        debit: function (amount) {

            if (
                typeof amount === "number" &&
                amount <= balance &&
                amount > 0
            ) {
                balance -= amount;
            }

        },

        checkBalance: function () {

            console.log(balance);

        }

    };
}


// Example Usage

const dipan = bank();

dipan.checkBalance(); // 200

dipan.credit(300);
dipan.checkBalance(); // 500

dipan.debit(150);
dipan.checkBalance(); // 350