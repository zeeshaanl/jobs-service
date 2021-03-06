import Job from '../../../domain/entity/Job';
import { Provider } from '../../../domain/service/provider/Provider';

/**
 * @class
 * @implements {Provider}
 */
export default class XingImplementation extends Provider {
    constructor(apiService) {
        super();
        this.apiService = apiService;
    }

    /**
     * @method
     * @name importJobs
     * @returns {Promise<Array<Job>>}
     *
     */
    async importJobs() {
        try {
            const rawJsonJobs = await this.apiService.getRawJsonJobs();
            return this.mapResponseToJobs(rawJsonJobs);
        } catch (e) {
            throw new Error(`Error receiving and mapping Xing Jobs. Error Object: ${JSON.stringify(e)}`)
        }
    }

    /**
     *
     * @param rawJobs
     * @returns {Array.<Job>}
     */
    mapResponseToJobs(rawJobs) {
        try {
            const { postings } = rawJobs.jobs;
            const { posting: postingArray } = postings[0];
            return postingArray.filter(singlePost =>
                singlePost.job_type[0] === 'CONTRACTOR'
            ).map(freelancePosts =>
                new Job({
                    title: freelancePosts.title[0],
                    companyName: freelancePosts.company_name[0],
                    description: freelancePosts.description[0],
                    applyLink: freelancePosts.url[0],
                    location: freelancePosts.city[0],
                    tags: freelancePosts.tags[0]
                })
            );
        } catch (e) {
            console.log(e);
        }
    }
}
