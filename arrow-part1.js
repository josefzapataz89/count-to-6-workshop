'use strict'

const inputs = process.argv.slice(2);

var result = inputs.map((word) => word[0])
    .reduce( (prev, current) => `${prev}${current}` );

// To show your work, you should output the transformation to the console.The above example would be:

//     [Hello, arrow, functions] becomes "Haf"

console.log(`[${inputs}] becomes "${result}"`);
