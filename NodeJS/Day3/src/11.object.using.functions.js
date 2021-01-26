function person(name, country){
    this.name = "Lexicon";
    this.country = "India";

this.sayHi = () => {
    return "Hi" + this.name;
};
}

let p1 = new person("Lexicon", "India");
let p2 = new person("Gluc", "USA");

let o1 = p1.sayHi();
let o2 = p2.sayHi();
console.log(o1, o2);