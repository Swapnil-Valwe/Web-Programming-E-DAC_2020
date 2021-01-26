class Person {
    constructor(name, country, id, email = "india@gmail.com"){
        this.name = name;
        this.id = id;
        this.country = country;
        this.email = email;
    }
}

//Member Function
this.sayHi = () => {
    return "Hi" + this.name;
}

let p1 = new Person("Abcd", 34, "Korea", "abcd@gmail.com");
let p2 = new Person("xyz", 45, "Tasmania", "xyz@orkut.com");

console.log(p1, p2);

let o1 = p1.sayHi();
let o2 = p2.sayHi();

console.log(o1, o2);
