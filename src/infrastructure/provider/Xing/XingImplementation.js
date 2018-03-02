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
     * @returns {Array.<Job>}
     *
     */
    async importJobs() {
        const rawJsonJobs = await this.apiService.getRawJsonJobs();
        return this.mapReponseToJobs(rawJsonJobs);
    }

    /**
     *
     * @param rawJobs
     * @returns {Array.<Job>}
     */
    mapReponseToJobs(rawJobs) {
        try {
            console.log('in json response to jobs');
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
                    city: freelancePosts.city[0],
                    tags: freelancePosts.tags[0]
                })
            );
        } catch (e) {
            console.log(e);
        }
    }
}
