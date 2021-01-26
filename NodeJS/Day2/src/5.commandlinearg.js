console.log("Command Line Arg");
console.log("Handling Defaul Value");
console.log("String to Number Conversion");

console.log(process.argv);//displays nodejs path on 0th index and file path on 1st index

let count = process.argv[2];
if(count == undefined){
    count = 6;
}
console.log(typeof count);
const num = count;
console.info(num, typeof num);