const x2js = require('xml2js');
const util = require('util');

/**
 *
 * @param rawXmlData
 * @return {*|Promise<any>|Promise<void>}
 */
const mapXmlToJson = (rawXmlData) => {
    const parser = new x2js.Parser();
    const parserPromise = util.promisify(parser.parseString.bind(parser));
    return parserPromise(rawXmlData);
};

export default mapXmlToJson;