const { resolve } = require("path");
const BASE_PATH = resolve(__dirname, "..");
const PACKAGES_PATH = resolve(BASE_PATH, "packages");
const API_PATH = resolve(PACKAGES_PATH, "api");
const FRONTEND_PATH = resolve(PACKAGES_PATH, "frontend");
const FILESERVER_PATH = resolve(PACKAGES_PATH, "fileserver");

module.exports = {
  name: "Admin",
  version: "1.0",
  BASE_PATH,
  PACKAGES_PATH,
  API_PATH,
  FRONTEND_PATH,
  FILESERVER_PATH
};
