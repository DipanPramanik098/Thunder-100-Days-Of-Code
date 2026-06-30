let count = 0;
function increment(){
    count++;
    console.log(count);
}

const x = increment;
x();
x();