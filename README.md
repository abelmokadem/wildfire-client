# wildfire-client [![Build Status](https://travis-ci.org/abelmokadem/wildfire-client.svg?branch=master)](https://travis-ci.org/abelmokadem/wildfire-client)

Node.JS 
[wildfire api](https://www.paloaltonetworks.com/documentation/71/wildfire/wf_api/get-started-with-the-wildfire-api) 
client library.

## Getting Started

```bash
npm install --save wildfire-client
```

```javascript
const createWildfireClient = require('wildfire-client').create

const wildfireClient = createWildfireClient({
    apikey: process.env.API_KEY,    // get your own :)
    baseUrl: process.env.BASE_URL,  // https://wildfire.paloaltonetworks.com/publicapi/
    json: true                      // api is xml only, client library converts the xml to json using xml2js
})

// Promise based client
wildfireClient.submitUrl({url: 'http://www.pdf995.com/samples/pdf.pdf'})    // /submit/url
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/abelmokadem/wildfire-client/tags). 

## Authors

* **Ash Belmokadem** - *Initial work* - [abelmokadem](https://github.com/abelmokadem)

See also the list of [contributors](https://github.com/abelmokadem/wildfire/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details

