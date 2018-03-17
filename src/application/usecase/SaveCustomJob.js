export default class SaveCustomJob {
    /**
     *
     * @param {JobsRepository} jobsRepository
     */
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    /**
     *
     * @param {Job} job
     * @returns {Promise<void>}
     */
    invoke(job) {
        return this.jobsRepository.saveCustomJob(job);
    }
}