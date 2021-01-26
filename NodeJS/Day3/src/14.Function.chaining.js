function Person(){
    
    this.sayHi = () => {
        console.log("Hi");
        return this;
    };

    this.sayHello = () => {
        console.log("hello");
        return this;
    };
}

let ref = new Person();
ref.sayHi().sayHello();
//console.log(ref);
ref.sayHi();
ref.sayHello();