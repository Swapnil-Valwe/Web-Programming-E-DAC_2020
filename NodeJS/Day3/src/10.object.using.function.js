function Person() {
    console.log(this);
}

//Difference
let p1 = Person(); // calling as a function
let p2 = new Person (); // Returns the current instance / object

console.log("p1", p1);
console.log("p2", p2);