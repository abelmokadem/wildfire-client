const path = require("path");
const snapshot = require("../lib/snapshot");
const tape = require("tape");
const xmlClient = require("../lib/xml-client");
const jsonClient = require("../lib/json-client");

tape.test(
  "[json-client] /submit/file: valid pdf should return a proper response",
  async t => {
    const actual = await jsonClient.submitFile({
      file: path.join(__dirname, "../fixtures/pdf.pdf")
    });

    snapshot(t, actual, "submit/file/response.json");
    t.end();
  }
);

tape.test(
  "[xml-client] /submit/file: valid pdf should return a proper response",
  async t => {
    const actual = await xmlClient.submitFile({
      file: path.join(__dirname, "../fixtures/pdf.pdf")
    });

    snapshot(t, actual, "submit/file/response.xml");
    t.end();
  }
);
