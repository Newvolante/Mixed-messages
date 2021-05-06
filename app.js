let messages = require('./quotes');

function outputMessage() {
    let randomNum = Math.random() * messages.length;
    return messages[randomNum];
}