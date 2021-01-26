let num = 100;
let str = "Hello World";

//Promise Object
let pr = new Promise((resolve, reject) => {});
pr.then();
pr.catch();


function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function mul(n1, n2) {
    return n1*n2;
}

function div(n1, n2) {
    return n1/n2;
}

//main function which will use the above function
function main (){
    let output = add(10, 20);
    console.log("Output", output);
}

main();