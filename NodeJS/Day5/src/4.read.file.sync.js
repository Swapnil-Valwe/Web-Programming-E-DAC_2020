// import java.io.*;//Java

// Internal Module :: this comes by default with nodejs
const fs = require("fs");

function main() {
  const filePath = "Class Work\\package.json";
  const fileOutput = fs.readFileSync(filePath, { encoding: "ascii" });

  console.log(fileOutput);
}

main();