const tape = require('tape')
const xmlClient = require('../lib/xml-client')
const jsonClient = require('../lib/json-client')

tape.test('[json-client] /submit/url: invalid pdf should return an error', async (t) => {
  t.plan(2)

  try {
    await jsonClient.submitUrl({url: '/test'})
  } catch (error) {
    t.equals(error.name, 'StatusCodeError')
    t.equals(error.statusCode, 422)
  }
})

tape.test('[xml-client] /submit/url: invalid pdf should return an error', async (t) => {
  t.plan(2)

  try {
    await xmlClient.submitUrl({url: '/test'})
  } catch (error) {
    t.equals(error.name, 'StatusCodeError')
    t.equals(error.statusCode, 422)
  }
})

tape.test('[json-client] /submit/url: invalid pdf should return an error', async (t) => {
  t.plan(1)

  const result = await jsonClient.submitUrl({url: 'http://www.pdf995.com/samples/pdf.pdf'})

  t.deepEquals(result, {
    wildfire: {
      'upload-file-info': [{
        url: ['http://www.pdf995.com/samples/pdf.pdf'],
        filetype: ['Adobe PDF document'],
        filename: [''],
        sha256: ['ebb031c3945e884e695dbc63c52a5efcd075375046c49729980073585ee13c52'],
        md5: ['8bd6509aba6eafe623392995b08c7047'],
        size: ['433994']
      }]
    }
  }
  )
})

tape.test('[xml-client] /submit/url: invalid pdf should return an error', async (t) => {
  t.plan(1)

  const result = await xmlClient.submitUrl({url: 'http://www.pdf995.com/samples/pdf.pdf'})

  t.deepEquals(result, '<?xml version="1.0" encoding="UTF-8"?>\n<wildfire>\n    <upload-file-info>\n        <url>http://www.pdf995.com/samples/pdf.pdf</url>\n        <filetype>Adobe PDF document</filetype>\n        <filename></filename>\n        <sha256>ebb031c3945e884e695dbc63c52a5efcd075375046c49729980073585ee13c52</sha256>\n        <md5>8bd6509aba6eafe623392995b08c7047</md5>\n        <size>433994</size>\n    </upload-file-info>\n</wildfire>')
})
