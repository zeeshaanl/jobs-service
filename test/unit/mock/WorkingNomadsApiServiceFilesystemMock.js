const fs = require('fs');
const util = require('util');

export default class WorkingNomadsApiServiceFilesystemMock {
    async getRawJobsString() {
        const readFile = util.promisify(fs.readFile);
        return readFile('test/unit/mock/WorkingNomadsJobs.js', 'utf-8');
    }
}
