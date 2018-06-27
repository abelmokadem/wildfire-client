module.exports = (client, { file }) =>
  client.request({
    uri: "/submit/file",
    method: "POST",
    formData: {
      file: file
    }
  });
