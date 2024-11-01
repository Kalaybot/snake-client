let connection;
const { MOVE_UP_KEY, MESSAGES_KEY } = require("./constants")

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn; // assigns parameter as variable value

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on("data", handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
// checks if the user press ctrl+c which exit them out
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  const direction = MOVE_UP_KEY[key];
  if (direction) {
    connection.write(`Move: ${direction}`);
  }
  const cannedMessages = MESSAGES_KEY[key];
  if (cannedMessages) {
    connection.write(`Say: ${cannedMessages}`);
  };
};

module.exports = { setupInput };