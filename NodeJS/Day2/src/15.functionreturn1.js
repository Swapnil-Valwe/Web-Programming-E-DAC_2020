console.log("Hello World");

function sum(num1, num2){
    let op = num1 + num2;

    //implicit
    return op;
}
let n1 = sum(10,20);
console.log(`Sum is ${n1}`);

function diff(num1, num2){
    let op = num1 - num2;

    //implicit
    return op;
}

let n2 = diff(20,10);
console.log(`Difference is ${n2}`);