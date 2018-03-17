export default class ImportJobsUseCase {

    /**
     *
     * @param {JobsRepository} jobsRepository
     */
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    /**
     *
     * @param {Provider} provider
     * @returns void
     */
    async invoke(provider) {
        const jobs = await provider.importJobs();
        this.jobsRepository.saveJobs(jobs);
    }
}
