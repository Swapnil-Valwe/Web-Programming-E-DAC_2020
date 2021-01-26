async function add(n1, n2) {
    return n1+n2;
}

async function sub(n1, n2){
    return n1 - n2;
}

//main function which will use the above function
async function main () {
    let output = await add(10, 20);
    let output1 = await sub(30, 20)
    console.log("Output", output, output1);
}

main();