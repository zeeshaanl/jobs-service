import mapXmlToJson from './MapXmlToJson';

const fs = require('fs');
const util = require('util');

export default class ApiService {
    async getRawJsonJobs() {
        const readFile = util.promisify(fs.readFile);
        const rawXmlJobs = await readFile('test/unit/mock/postings.xml', 'utf-8');
        return mapXmlToJson(rawXmlJobs);
    }
}