const { resolve } = require("path");
const BASE_PATH = resolve(__dirname, "..");
const SERVICES_PATH = resolve(BASE_PATH, "services");
const API_PATH = resolve(SERVICES_PATH, "api");
const FRONTEND_PATH = resolve(SERVICES_PATH, "frontend");
const FILESERVER_PATH = resolve(SERVICES_PATH, "fileserver");

module.exports = {
  name: "Admin",
  version: "1.0",
  BASE_PATH,
  SERVICES_PATH,
  API_PATH,
  FRONTEND_PATH,
  FILESERVER_PATH
};
