console.log("Function Overloading");
console.log("Function Arguements Keyword");
function hello(p1, p2){
    console.log(arguments);
    console.log("Hello World", p1, p2);
}

hello();
hello(100);
hello(100, 200);

