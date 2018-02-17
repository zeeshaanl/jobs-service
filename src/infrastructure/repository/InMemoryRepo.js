/**
 * @implements {JobsRepository}
 */
export default class InMemoryRepo {

    static inMemoryVariable;

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