// class and Object

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(this.name);
    }
}

const u1 = new Person("D",1);
const u2 = new Person("A",1);

u1.greet();
u2.greet();
