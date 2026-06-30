console.log(this);
const user = {
    name: "Dipan",
    greet: function(){
        console.log(this);
    }
}
user.greet();