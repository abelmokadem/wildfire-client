const request = require('request-promise-native')
const promisify = require('util.promisify')
const merge = require('deepmerge')
const xml2js = require('xml2js')
const parseXml = promisify(xml2js.parseString.bind(xml2js))

module.exports = {
  create: ({apikey, baseUrl, json}) => {
    const parseResponse = async (body) => json ? parseXml(body) : body

    const client = {
      request: (options) => request(merge(options, {
        baseUrl: baseUrl,
        formData: {
          apikey: apikey
        }
      })).then(parseResponse)
    }

    return {
      submitUrl: require('./submit/url').bind(null, client)
    }
  }
}
