require("dotenv").config();
console.clear();
const { API_PATH, FRONTEND_PATH, FILESERVER_PATH } = require("../index");

module.exports = [
  {
    tag: "API",
    color: "BG_BLUE",
    command: "npm run build",
    directory: API_PATH
  },
  {
    tag: "FRONTEND",
    color: "BG_GREEN",
    command: "npm run build",
    directory: FRONTEND_PATH
  },
  {
    tag: "FILESERVER",
    color: "BG_RED",
    command: "npm run build",
    directory: FILESERVER_PATH
  }
];
