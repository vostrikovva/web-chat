const PORT = process.env.PORT || 5000;
const LOG_FILE = process.env.LOG_FILE || 'log.txt';
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT || 5001;

module.exports = {
  PORT,
  LOG_FILE,
  WEBSOCKET_PORT,
};
