import Job from '../../../domain/entity/Job';

/**
 * @class
 * @implements {Provider}
 */
export default class XingImplementation {
    constructor(apiService) {
        this.apiService = apiService;
    }

    /**
     * @method
     * @name importJobs
     * @returns {Array.<Job>}
     *
     */
    async importJobs() {
        const rawJobs = await this.apiService();
        return this.mapReponseToJobs(rawJobs);
    }

    /**
     *
     * @param rawJobs
     * @returns {Array.<Job>}
     */
    mapReponseToJobs(rawJobs) {
        try {
            const { postings } = rawJobs.jobs;
            const { posting: postingArray } = postings[0];
            return postingArray.filter(singlePost =>
                singlePost.job_type[0] === 'CONTRACTOR'
            ).map(freelancePosts =>
                new Job({
                    id: parseInt(freelancePosts.id[0], 10),
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
