// complete this js code
// function Person(name, age) {
// 	this.name=name;
// 	this.age=age;
// }

// Person.prototype.greet = function(){
// 	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
// }

// function Employee(name, age, jobTitle) {
// 	Person.call(this,name,age);
// 	this.jobTitle = jobTitle;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function(){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age}, and my job title is ${this.jobTitle}.`)
// }
// const person = new Person('Suraj',25)
// person.greet()

// const employee = new Employee('Pankaj', 24, 'SDE')
// employee.greet()
// employee.jobGreet()
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet() method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor with the Employee instance as 'this'
  this.jobTitle = jobTitle;
}

// Set up the prototype chain to inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet() method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Usage example
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice, I am 30 years old.

const employee1 = new Employee("Bob", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;