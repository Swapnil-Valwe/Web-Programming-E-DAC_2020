let str = "Hello World";
let num = 100;
let isValid = true;

//Named Function
function hello(){
    console.log("Hello World");
}

hello();

//Anonymous function assigned to an variable Expression
let hi = function(p1){
    console.log("I am an anonymous function");
}


console.log(typeof hi);
hi(100);