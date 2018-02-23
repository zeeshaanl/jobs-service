import mapXmlToJson from './MapXmlToJson';
var rp = require('request-promise');

const fs = require('fs');
const util = require('util');

export default class ApiService {
    async getRawJsonJobs() {
        const options = {
            method: 'POST',
            uri: 'http://google.com'
        };
        try {
          const response = await rp(options);
          console.log(response);
        }
        catch(e) {
            console.log(e);
        }
    }
}