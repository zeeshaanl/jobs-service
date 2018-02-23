import { JobsRepository } from '../../domain/repository/JobsRepository';

/**
 * @implements {JobsRepository}
 */
export default class InMemoryRepo extends JobsRepository {

    static inMemoryVariable;

    constructor() {
        super();
    }

    /**
     *
     * @param {Array.<Job>} jobs
     */
    saveJobs(jobs) {
        InMemoryRepo.inMemoryVariable = jobs;
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @return {Array.<Job>}
     */
    searchForJobs(searchObject) {
        return InMemoryRepo.inMemoryVariable.filter(job =>
            (searchObject.jobTitle ? job.title === searchObject.jobTitle : true) &&
            (searchObject.companyName ? job.companyName === searchObject.companyName : true) &&
            (searchObject.city ? job.city === searchObject.city : true)
        )
    }
}