function multiply(p1, p2){
    console.log("multiply", p1, p2);
    p1 = p1 * 3; 
    p2 = p2 + 1;
    console.log("multiply", p1, p2);
    return p1*p2;
}

let num1 = 1;
let num2 = 3;
console.log(num1, num2);
multiply(num1, num2);
console.log(num1, num2);