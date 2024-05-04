const path = require('path');

// Basename
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

console.log(path.join(__dirname, 'test', 'hello.html'));
