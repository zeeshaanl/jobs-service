import mapXmlToJson from '../../../src/infrastructure/provider/Xing/MapXmlToJson';

const fs = require('fs');
const util = require('util');

export default class XingApiServiceFilesystemMock {
    async getRawJsonJobs() {
        const readFile = util.promisify(fs.readFile);
        const rawXmlJobs = await readFile('test/unit/mock/postingsSmall.xml', 'utf-8');
        return mapXmlToJson(rawXmlJobs);
    }
}
