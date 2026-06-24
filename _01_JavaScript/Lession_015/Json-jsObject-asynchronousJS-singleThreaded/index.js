// console.log('Start');
// const response = await fetch('https://api.github.com/users?per_page=20');
// //Todo-> convert response to javascript Object , Not json
// const data = await response.json();  
// console.log(data);
// console.log('end');

// TODO ---> Async Await
async function github() {
    const response = await fetch('https://api.github.com/users?per_page=20');
    //Todo-> convert response to javascript Object , Not json
    const data = await response.json();
    console.log(data);
}






// * -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// ? Learn json vs javaScript Object
function Learning() {
    // * js Object vs JSON

    // ? Object ->
    let obj = {
        name: "Dipan",
        age: 21,
        a: undefined,
        b: function greet() {
            console.log("Hello");
        }
    }

    // ? JSON
    // * Json only support string, number, boolean, null, object, array
    // ! Json Does Not Support Function , Undefined etc.
    let jSon = `{
    "name": "Dipan",
    "age": 21
}`;


    // TODO -> convert an object to json
    const a = JSON.stringify(obj);
    console.log(a);

    // TODO -> convert json to object
    console.log(JSON.parse(a));

}

// ? Single Threaded, Asynchronous
function Learning2() {

    // ? JavaScript is a Single Threaded, Asynchronous Language
    // * Single Threaded -> One Task Execute at one time.
    const a = 20;  // ? 1st create a, then b, then c---> not parallaly.
    const b = 30;
    const c = 300;
    console.log(a);
    console.log(b);
    console.log(c);

    // ? Synchronous -> Line By Line Execution,
    // * Asynchronous -> let's response take time to exexute , then it execute next lines first. 
}

// * -----------------------------------------------------------------------------------------------------------------------------------------------------------------
