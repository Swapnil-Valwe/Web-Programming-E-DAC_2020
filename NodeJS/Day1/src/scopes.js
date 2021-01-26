//global scope
let str = "Hello";
for (let i=0; i<2; i++){
    let str = "Again";
    console.log(i, str);
}

for(let i=0; i<2; i++){
    //why this statement work
    //Block scope
    let str = "World";
    console.log(i, str);
}