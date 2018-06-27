const request = require("request");
const promisify = require("util.promisify");
const xml2js = require("xml2js");
const parseXml = promisify((value, callback) =>
  xml2js.parseString(value, { explicitArray: false }, callback)
);

module.exports = {
  create: ({ apikey, baseUrl, json }) => {
    const parseResponse = async body => (json ? parseXml(body) : body);

    const client = {
      request: options =>
        new Promise((resolve, reject) => {
          options.baseUrl = baseUrl;
          options.formData = options.formData || {};
          options.formData.apikey = apikey;

          request(options, (error, response, body) => {
            if (error) {
              return reject(response);
            }

            return resolve(parseResponse(body));
          });
        })
    };

    return {
      submitUrl: require("./submit/url").bind(null, client),
      submitFile: require("./submit/file").bind(null, client),
      getReport: require("./get/report").bind(null, client),
      getVerdict: require("./get/verdict").bind(null, client)
    };
  }
};
