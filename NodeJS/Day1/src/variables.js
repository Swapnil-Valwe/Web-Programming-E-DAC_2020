var str = "hello var";
let str1 = "Hello let";
const str2 = "Hello const";

console.log(str, str1, str2);

//try to re-declare
var str = "Var Again";
//let str1 = "Let Again";
str1  = "Let Again";

//const str2 = "Const Again";
str2 = "Const Again";

console.log(str, str1, str2);