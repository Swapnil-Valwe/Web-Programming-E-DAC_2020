//Named function
//p1 can be undefined
function helloWorld(p1){

    //lets handle the case of undefined
    if(p1== undefined){
        p1=10;
    }
    console.log("Hello World", p1);
}

//assigning the default value to p1
function addition(p1 = 10, p2 = 30){
    console.log("ADdtion here", p1, p2);
    return p1+p2;
}


let sum1 = addition();
console.log("Sum is", sum1);

let sum2 = addition(undefined, 10);
console.log("Sum is", sum2);

//helloWorld();
//helloWorld(100);