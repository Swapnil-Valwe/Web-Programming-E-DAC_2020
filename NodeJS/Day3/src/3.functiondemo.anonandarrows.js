//Named Function
function sayHi(){
    console.log("Hiii");
}

//Anonymous Function :: Unnamed Function :: It must be assigned to variable
//Function Expression
let sayHello = function() {
    console.log("Hieee");
};


//Arrow Functions :: Lambda Function
//Assigning to variable is Optional
() => {
    console.log("Hiee");
};

() => console.log("Arrow Function");

//Arrow Function Returning Number 10
() => 10;

() => {
    return 10;
};

//Arrow Function Returning String
() => "Hello World";

() => {
    return "Hello World";
};
