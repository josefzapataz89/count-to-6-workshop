'use strict'

var numbers = process.argv.slice(2);
var minimun = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${minimun}`);
