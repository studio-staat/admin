const {
  BASE_PATH,
  API_PATH,
  FRONTEND_PATH,
  FILESERVER_PATH,
  API_TAG,
  FRONTEND_TAG,
  FILESERVER_TAG,
} = require("../index");

module.exports = [
  {
    tag: "[Core]",
    color: "BG_BLUE",
    command: "rm -Rf ./node_modules ./package-lock.json",
    directory: BASE_PATH,
  },
  {
    tag: API_TAG,
    color: "BG_BLUE",
    command: "rm -Rf ./node_modules ./package-lock.json",
    directory: API_PATH,
  },
  {
    tag: FRONTEND_TAG,
    color: "BG_GREEN",
    command: "rm -Rf ./node_modules ./package-lock.json",
    directory: FRONTEND_PATH,
  },
  {
    tag: FILESERVER_TAG,
    color: "BG_RED",
    command: "rm -Rf ./node_modules ./package-lock.json",
    directory: FILESERVER_PATH,
  },
];
