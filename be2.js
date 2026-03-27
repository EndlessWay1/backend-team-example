const fs = require('fs');

console.log("Start");

fs.readFile('100mb-examplefile-com.txt', 'utf8', (err, data) => {
    console.log(data.slice(0, 30));
});

console.log("End");