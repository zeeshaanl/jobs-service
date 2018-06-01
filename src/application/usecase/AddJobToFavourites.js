export default class AddJobToFavourites {
    /**
     *
     * @param {FavouriteJobsRepository} favouriteJobsRepository
     */
    constructor(favouriteJobsRepository) {
        this.favouriteJobsRepository = favouriteJobsRepository;
    }

    /**
     *
     * @param {string} userId
     * @param {string} jobId
     * @returns {Promise<void>}
     */
    invoke(userId, jobId) {
        return this.favouriteJobsRepository.addFavouriteJobToUser(userId, jobId);
    }
}