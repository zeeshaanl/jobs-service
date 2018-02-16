export default class FindJobsUseCase {
    /**
     *
     * @param {JobsRepository} jobsRepository
     */
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @returns {Array.<Job>}
     */
    invoke(searchObject) {
        return this.jobsRepository.searchForJobs(searchObject);
    }
}