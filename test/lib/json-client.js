require('dotenv').config()
const createWildfireClient = require('../../src').create

module.exports = createWildfireClient({
  apikey: process.env.API_KEY,
  baseUrl: process.env.BASE_URL,
  json: true
})
