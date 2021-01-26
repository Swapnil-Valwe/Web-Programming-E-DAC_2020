function hello(p1){
    console.log(typeof p1, p1);

    if(typeof p1 === "function"){
        p1();
    }
}

hello(100);
hello("CDAC");

//Passing Function as parameter :: to Another function hello
//Function Variable :: Reference Variable

let hi = function(){
    console.log("I am anon and callback also as an Expression.");
};

hello(hi);

hello(function(){
    console.log("I am anon and callback also.")
});