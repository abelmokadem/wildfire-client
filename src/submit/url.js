module.exports = (client, {url}) => client.request({
  uri: '/submit/url',
  method: 'POST',
  formData: {
    url: url
  }
})
