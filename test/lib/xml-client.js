require("dotenv").config();
const createWildfireClient = require("../../dist").create;

module.exports = createWildfireClient({
  apikey: process.env.API_KEY,
  baseUrl: process.env.BASE_URL,
  json: false
});
