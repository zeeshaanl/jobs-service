import { Provider } from '../../../domain/service/provider/Provider';
import Job from '../../../domain/entity/Job';

/**
 * @class
 * @implements {Provider}
 */
export default class WorkingNomadsImplementation extends Provider {
    constructor(apiService) {
        super();
        this.apiService = apiService;
    }

    /**
     * @method
     * @name importJobs
     * @return {Promise<Array<Job>>}
     */
    async importJobs() {
        const rawJobsString = await this.apiService.getRawJobsString();
        return this.mapResponseToJobs(rawJobsString)
    }

    /**
     *
     * @param rawJobsString
     * @returns {Array.<Job>}
     */
    mapResponseToJobs(rawJobsString) {
        const rawJsonJobs = JSON.parse(rawJobsString);
        return rawJsonJobs.map(rawJob =>
            new Job({
                title: rawJob.title,
                companyName: rawJob.company_name,
                description: rawJob.description,
                applyLink: rawJob.url,
                location: 'Remote',
                tags: rawJob.category_name
            })
        )
    }
}