import * as elasticsearch from 'elasticsearch';
import { JobsRepository } from '../../domain/repository/JobsRepository';
import JobViewModel from '../viewModel/JobViewModel';

/**
 * @implements {JobsRepository}
 */
export default class ElasticSearch extends JobsRepository {
    constructor() {
        super();
        this.client = new elasticsearch.Client({
            host: process.env.ES_URL,
            log: 'trace'
        });
    }

    /**
     * @param {Array.<Job>} jobs
     * @return void
     */
    saveJobs(jobs) {
        jobs.forEach(job => {
            const { id, ...jobBody } = job;
            this.client.index({
                index: 'jobs',
                type: 'string',
                id,
                body: jobBody
            });
        });
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @return {Promise<Array.<Job>>}
     */
    async searchForJobs(searchObject) {
        const { jobTitle, city } = searchObject;
        const elasticSearchJobs = await this.client.search({
            index: 'jobs',
            type: 'string',
            body: {
                query: {
                    bool: {
                        must: {
                            "multi_match": {
                                "fields": ["companyName", "description", "tags", "title"],
                                "query": jobTitle,
                                "fuzziness": "AUTO"
                            }
                        },
                        filter: {
                            "match": {
                                "city": {
                                    "query": city,
                                    "fuzziness": "AUTO"
                                }
                            }
                        }
                    }
                },
            }
        });

        const hits = elasticSearchJobs.hits.hits;

        return hits.map(job => {
            const { _id: id, _source } = job;
            const { title, companyName, description, applyLink, city } = _source;
            return new JobViewModel({
                id,
                title,
                companyName,
                description,
                applyLink,
                city
            })
        });
    }
}
