// Internal Module :: this comes by default with nodejs
const fs = require("fs");

function main() {
  const filePath = "Class Work\\package.json";

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(err); 

    console.log(data);
  });
}

main();