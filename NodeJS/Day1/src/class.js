class Second{
    static main(args){
        console.log("Hello World like Java");
    }

    hello(){
        console.log("Hello Javascript");
    }
}

//Calling static method
Second.main();

//Instance method
let Second = new Second();
Second.hello();
