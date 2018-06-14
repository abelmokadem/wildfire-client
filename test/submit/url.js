const snapshot = require("../lib/snapshot");
const tape = require("tape");
const xmlClient = require("../lib/xml-client");
const jsonClient = require("../lib/json-client");

tape.test(
  "[xml-client] /submit/url: invalid pdf should return an error",
  async t => {
    try {
      await xmlClient.submitUrl({ url: "/test" });
    } catch (error) {
      t.equals(error.name, "StatusCodeError");
      t.equals(error.statusCode, 422);
    }

    t.end();
  }
);

tape.test(
  "[json-client] /submit/url: invalid pdf should return an error",
  async t => {
    try {
      await jsonClient.submitUrl({ url: "/test" });
    } catch (error) {
      t.equals(error.name, "StatusCodeError");
      t.equals(error.statusCode, 422);
    }

    t.end();
  }
);

tape.test(
  "[json-client] /submit/url: valid pdf should return a proper response",
  async t => {
    const actual = await jsonClient.submitUrl({
      url: "http://www.pdf995.com/samples/pdf.pdf"
    });

    snapshot(t, actual, "submit/url/response.json");
    t.end();
  }
);

tape.test(
  "[xml-client] /submit/url: valid pdf should return a proper response",
  async t => {
    const actual = await xmlClient.submitUrl({
      url: "http://www.pdf995.com/samples/pdf.pdf"
    });

    snapshot(t, actual, "submit/url/response.xml");
    t.end();
  }
);
