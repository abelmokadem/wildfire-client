module.exports = (client, { hash }) =>
  client.request({
    uri: "/get/report",
    method: "POST",
    formData: {
      hash: hash
    }
  });
