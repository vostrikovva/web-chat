const { writeFile } = require('fs');
const { LOG_FILE } = require('./config');

const logMessage = (message) => {
  if (!message) return;

  writeFile(LOG_FILE, message);
};

module.exports = {
  logMessage,
};
