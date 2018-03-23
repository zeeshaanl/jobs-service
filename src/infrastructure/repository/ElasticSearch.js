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
     * @returns void
     */
    saveJobs(jobs) {
        jobs.forEach(job => {
            this.handleJobSave(job, 'jobs');
        });
    }

    /**
     * @param {Job} job
     * @returns {Promise<void>}
     */
    saveCustomJob(job) {
        return this.handleJobSave(job, 'customjobs');
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @return {Promise<Array.<Job>>}
     */
    async searchForJobs(searchObject) {
        const { jobTitle, location } = searchObject;
        const elasticSearchJobs = await this.client.search({
            index: 'jobs, customjobs',
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
                                "location": {
                                    "query": location,
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
            const { title, companyName, description, applyLink, location } = _source;
            return new JobViewModel({
                id,
                title,
                companyName,
                description,
                applyLink,
                location
            })
        });
    }

    /**
     *
     * @param {Job} job
     * @param {string} index
     * @returns {Promise<void>}
     */
    handleJobSave(job, index) {
        console.log(index);
        if (index !== 'jobs' && index !== 'customjobs') {
            throw Error('Index must be named jobs or customjobs');
        }
        const { id, ...jobBody } = job;
        return this.client.index({
            index,
            type: 'string',
            id,
            body: jobBody
        });
    }
}
