const snapshot = require("../lib/snapshot");
const tape = require("tape");
const xmlClient = require("../lib/xml-client");
const jsonClient = require("../lib/json-client");

tape.test(
  "[json-client] /get/verdict: invalid hash should return an error",
  async t => {
    try {
      await jsonClient.getReport({ hash: "INVALID_HASH" });
    } catch (error) {
      t.equals(error.name, "StatusCodeError");
      t.equals(error.statusCode, 421);
    }

    t.end();
  }
);

tape.test(
  "[xml-client] /get/verdict: invalid hash should return an error",
  async t => {
    try {
      await xmlClient.getReport({ hash: "INVALID_HASH" });
    } catch (error) {
      t.equals(error.name, "StatusCodeError");
      t.equals(error.statusCode, 421);
    }

    t.end();
  }
);

tape.test(
  "[json-client] /get/verdict: valid hash should return a proper response",
  async t => {
    const actual = await jsonClient.getVerdict({
      hash: "afe6b95ad95bc689c356f34ec8d9094c495e4af57c932ac413b65ef132063acc"
    });

    snapshot(t, actual, "get/verdict/response.json");
    t.end();
  }
);

tape.test(
  "[xml-client] /get/verdict: valid hash should return a proper response",
  async t => {
    const actual = await xmlClient.getVerdict({
      hash: "afe6b95ad95bc689c356f34ec8d9094c495e4af57c932ac413b65ef132063acc"
    });

    snapshot(t, actual, "get/verdict/response.xml");
    t.end();
  }
);
