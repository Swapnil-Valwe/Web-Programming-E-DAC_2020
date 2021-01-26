console.log("Return");

function demo1(){

    //lets return String
    return "Hello; i am STring";
}


function demo2(){

    //lets return Number
    return 500;
}

function demo3(){
    //lets return function
    return function(){
        return "Inner Function Returning String";
    }
}



let d1 = demo1();
console.log("Demo1", typeof d1, d1);

let d2 = demo2();
console.log("Demo2", typeof d2, d2);

let d3 = demo3();
console.log("Demo3", typeof d3);
    
if(typeof d3 === "function"){
    d3();
}