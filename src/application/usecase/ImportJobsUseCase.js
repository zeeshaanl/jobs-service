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
     * @param {Array<Provider>} providers
     * @returns void
     */
    async invoke(providers) {
        await Promise.all(providers.map(async provider => {
            const jobs = await provider.importJobs();
            this.jobsRepository.saveJobs(jobs);
        }))
    }
}
