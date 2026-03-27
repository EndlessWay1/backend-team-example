const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('100mb-examplefile-com.txt', 'utf8');

console.log(data.slice(0, 30));
console.log("End");