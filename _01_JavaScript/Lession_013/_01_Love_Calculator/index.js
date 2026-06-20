const btn = document.querySelector('button');
const boy = document.querySelector('#boy');
const girl = document.querySelector('#girl');

const span = document.querySelector('span');

btn.addEventListener('click',()=>{
    const isBoy = boy.value.length >= 1;
    const isGirl = girl.value.length >= 1;
    if(isBoy && isGirl){
        // 0 to 100
        const random = Math.floor(Math.random()*101);
        span.textContent = `${random} %`;
    }else{
        if(!isBoy && !isGirl) alert("Please filled Boy And Girl Name");
        else if(!isBoy) alert("Fill Boy Name");
        else alert("Fill Girl Name");
    }
})