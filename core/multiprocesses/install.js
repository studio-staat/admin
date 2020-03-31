console.clear();
const {
  BASE_PATH,
  API_PATH,
  FRONTEND_PATH,
  FILESERVER_PATH
} = require("../index");

module.exports = [
  {
    tag: "API",
    color: "BG_BLUE",
    command: "npm install",
    directory: API_PATH
  },
  {
    tag: "FRONTEND",
    color: "BG_GREEN",
    command: "npm install",
    directory: FRONTEND_PATH
  },
  {
    tag: "FILESERVER",
    color: "BG_RED",
    command: "npm install",
    directory: FILESERVER_PATH
  }
];
