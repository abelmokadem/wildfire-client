module.exports = (client, { hash }) =>
  client.request({
    uri: "/get/verdict",
    method: "POST",
    formData: {
      hash: hash
    }
  });
