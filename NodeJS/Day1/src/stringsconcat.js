//String in JS
let str = "Hello World";
let str1 = "Hello World";

//Very Important: ES6
let str2 = `Hello Universe`;

//Concatenation
let str3 = "String" + str1 + str2;
console.log(str3);

//Concatenation
let str4 = `StringTild $(str1) $(str2)`;
console.log(str4);

//Dynamic Place Holder :: $(var_name)
let limit = 10;
let start = 0;
let url = "https://jsonplaceholder.typicode.com/posts?_start=" +
start +
"&_limit=" +
limit;
//let url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
console.log(url);