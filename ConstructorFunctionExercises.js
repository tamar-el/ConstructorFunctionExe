//1
function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function () { console.log("brand:", this.brand, "model", this.model) };

}
const p1 = new Phone("sumsung", "s22");
p1.details();

//2
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function () { console.log("area:", this.width * this.height) };

}
const R1 = new Rectangle(2, 3);
R1.area();

//3
function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
        console.log("total amount:", this.balance);
    };
    this.withdraw = function (amount) {
        if (this.amount <= amount) {
            this.balance -= amount;

        }
        else{
            console.log("the amount is not avaiable");
        }
    };
    this.checkBalance = function () { console.log("current balance:", this.balance) };



}
const B1 = new BankAccount("yoni", 3);
B1.checkBalance();
B1.deposit(3);
B1.checkBalance();

//4

function Animal(name){
    this.name=name;

}
Animal.prototype.speak = function() { console.log(`${this.name} makes a sound`) };


function Dog(name){
    this.name=name;
    this.bark = function() { console.log(this.name,"bark") };

}

Object.setPrototypeOf(Dog.prototype,Animal.prototype);
const D1=new Dog("dog1");
D1.bark();
D1.speak()

//5


function Vehicle(type){
    this.type=type;

}
Vehicle.prototype.describe = function() { console.log(`this is a ${this.type} `) };


function Car(brand){
    this.brand=brand;
    this.type="car";
    this.info = function() { console.log("this is a",this.brand,this.type) };

}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);
const v1=new Car("BMV");
v1.describe();
v1.info()

//6


function Shape(){
}
Shape.prototype.area = function() { return 0; };


function Circle(radius){
    this.radius=radius;
    this.area = function() { return Math.PI*(radius*radius) };

}
function Square(side){
    this.side=side;
    this.area = function() { return (side*side) };

}
Object.setPrototypeOf(Circle.prototype,Shape.prototype);
const shape1=new Circle(3);
console.log(shape1.area());
const shape2=new Square(4);
console.log(shape2.area());

//7

