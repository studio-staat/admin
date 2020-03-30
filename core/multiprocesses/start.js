require("dotenv").config();
console.clear();
const { API_PATH, FRONTEND_PATH, FILESERVER_PATH } = require("../index");

module.exports = [
  {
    tag: "API",
    color: "BG_BLUE",
    command: "npm start",
    directory: API_PATH
  },
  {
    tag: "FRONTEND",
    color: "BG_GREEN",
    command: "npm start",
    directory: FRONTEND_PATH
  },
  {
    tag: "FILESERVER",
    color: "BG_RED",
    command: "npm start",
    directory: FILESERVER_PATH
  }
];
