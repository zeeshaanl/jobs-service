import * as elasticsearch from 'elasticsearch';

export default class ElasticSearch {
    constructor() {
        this.client = new elasticsearch.Client({
            host: 'http://localhost:9200',
            log: 'trace'
        });
    }

    async createJobs() {
        try {
            const response = await this.client.index({
                index: 'customer',
                type: 'job',
                id: '3',
                body: {
                    name: 'Bobby',
                    age: 23,
                    job: 'Student at University'
                }
            });
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    searchJobs() {
        this.client.search({
            index: 'customer',
            type: 'job',
            body: {
                query: {
                    fuzzy: {
                        job: {
                            value: "enginerer",
                            fuzziness: 2
                        }
                    }
                },
            }
        }, function (error, response, status) {
            if (error) {
                console.log("search error: " + error)
            }
            else {
                console.log("--- Response ---");
                console.log(response);
                console.log("--- Hits ---");
                response.hits.forEach(function (hit) {
                    console.log(hit);
                })
            }
        });
    }
}
