// IP & PORT
const IP = 'localhost';
const PORT = 50541;

// Movement keys
const MOVE_UP_KEY = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
};

// Canned messages keys
const MESSAGES_KEY = {
  '1': 'Have a good game',
  '2': 'Let me win!',
  '3': 'This is fun',
  '4': 'GG'
};

// Player name
const PLAYER_NAME = process.argv[2] || 'Player';

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MESSAGES_KEY,
  PLAYER_NAME
};
