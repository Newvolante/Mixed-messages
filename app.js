let messages = require('./quotes');

function outputMessage() {
    let randomNum = Math.floor(Math.random() * messages.length);
    return messages[randomNum];
    // return randomNum;
}

console.log(outputMessage());