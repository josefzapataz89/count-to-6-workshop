'use strict'

// [userId, username, email, age, firstName, lastName]
const userArray = process.argv.slice(2);

var result = {
    username: null,
    email: null
};

// console.log(userArray);

[, result.username, result.email] = userArray;

console.log(result);
