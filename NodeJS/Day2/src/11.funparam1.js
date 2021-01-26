let str = "Hello";
let num = 100;

let hi = function(){
    console.log("I am an anonymous function");
}

function hello(p1){
    console.log(typeof p1, p1);

    if (typeof p1 == "function"){
        p1();
    }
    
}

//passing String as Parameter to another function hello
hello (str);

//Passing Number as Parameter to another function hello
hello (num);

//Passing Number as Parameter to another function
hello (hi);