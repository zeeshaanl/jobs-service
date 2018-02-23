const fs = require('fs');
const x2js = require('xml2js');
const util = require('util');

const ImportJobsFromXingFilesystem = async () => {
    console.log('in parse xml');
    const parser = new x2js.Parser();

    const readFile = util.promisify(fs.readFile);
    const rawXmlData = await readFile('test/unit/mock/postings.xml', 'utf-8');

    const parserPromise = util.promisify(parser.parseString.bind(parser));
    const result = await parserPromise(rawXmlData);
    return result
    // return JSON.stringify(result, null, 2);
};

export default ImportJobsFromXingFilesystem;