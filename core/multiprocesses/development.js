const {
  API_PATH,
  FRONTEND_PATH,
  FILESERVER_PATH,
  API_TAG,
  FRONTEND_TAG,
  FILESERVER_TAG,
} = require("../index");

module.exports = [
  {
    tag: API_TAG,
    color: "BG_BLUE",
    command: "npm run dev",
    directory: API_PATH,
  },
  {
    tag: FRONTEND_TAG,
    color: "BG_GREEN",
    command: "npm run dev",
    directory: FRONTEND_PATH,
  },
  {
    tag: FILESERVER_TAG,
    color: "BG_RED",
    command: "npm run dev",
    directory: FILESERVER_PATH,
  },
];
