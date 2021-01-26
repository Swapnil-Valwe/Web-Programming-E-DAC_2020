// Object Literals :: Easiest way to create the object in JS
//Primitive Variables
let num = 100;
let str = "Hello";

//Object Literals :: Reference Variable
let ref = { 
    //key: value,
    firstName: "Booboo",
    lastName: "Pichu",
    city: "Mumbai",
    mobile: "128461928",
    email: "abcd@gmail.com",
    friends: 100,
    active: true
};


console.log(typeof ref);
console.log("initial", ref);

//Access Member :: Using Dot Operator
console.log("Username", ref.firstName, ref.lastName);


//Access Memeber :: Using Bracket Notation
console.log("UserName", ref["firstName"]);

//update Member
ref.city = "Delhi";

console.log("Updated", ref);