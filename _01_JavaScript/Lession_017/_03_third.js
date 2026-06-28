class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.x = 10;
    }

    greet(){
        console.log(`Hi ${this.name}`)
    }
};

// Inheritance

class Customer extends Person{
    constructor(name,age,balance,city){
        super(name,age);
        this.balance = balance;
        this.city = city;
    }
}


const c1 = new Customer("Dipan",20,720,"Panskura");

console.log(c1);