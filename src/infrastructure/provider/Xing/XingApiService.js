import mapXmlToJson from './MapXmlToJson';

const https = require('follow-redirects').https;
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

export default class XingApiService {
    async getRawJsonJobs() {
        return (
            new Promise((resolve, reject) => {
                const options = {
                    "hostname": "www.xing.com",
                    "method": "GET",
                    "path": "/jobs/postings.xml.gz",
                    "headers": {
                        "Accept": "application/rss+xml"
                    }
                };
                let responseXmlData = '';

                const req = https.request(options, function (res) {
                    // console.log(`STATUS: ${res.statusCode}`);
                    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
                    req.on('error', function (e) {
                        reject(e)
                    });

                    res.pipe(gunzip);
                    gunzip.on('data', function (data) {
                        responseXmlData += data.toString();
                    });

                    gunzip.on('end', function () {
                        resolve(mapXmlToJson(responseXmlData));
                    });
                });
                req.end();
            })
        );

    }
}