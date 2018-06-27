const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const shouldUpdateSnapshot = !!process.env.SNAPSHOT_UPDATE;

module.exports = (t, value, file) => {
  const filePath = path.join(__dirname, "../snapshots", file);
  const formattedValue =
    typeof value === "string" ? value : JSON.stringify(value, null, 2);
  mkdirp.sync(path.dirname(filePath));

  if (shouldUpdateSnapshot) {
    fs.writeFileSync(filePath, formattedValue);
  }

  const snapshotValue = fs.readFileSync(filePath, { encoding: "utf8" });

  t.deepEquals(formattedValue, snapshotValue, `snapshot testing ${file}`);
};
