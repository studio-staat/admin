require("dotenv").config();
console.clear();
const { API_PATH, FRONTEND_PATH, FILESERVER_PATH } = require("../index");

module.exports = [
  {
    tag: "API",
    color: "BG_BLUE",
    command: "npm run dev",
    directory: API_PATH
  },
  {
    tag: "FRONTEND",
    color: "BG_GREEN",
    command: "npm run dev",
    directory: FRONTEND_PATH
  },
  {
    tag: "FILESERVER",
    color: "BG_RED",
    command: "npm run dev",
    directory: FILESERVER_PATH
  }
];
