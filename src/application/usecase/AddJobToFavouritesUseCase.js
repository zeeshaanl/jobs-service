export default class AddJobToFavouritesUseCase {
    /**
     *
     * @param {FavouriteJobsRepository} favouriteJobsRepository
     */
    constructor(favouriteJobsRepository) {
        this.favouriteJobsRepository = favouriteJobsRepository;
    }

    /**
     *
     * @param {FavouriteJob} favouriteJob
     * @returns {Promise<void>}
     */
    invoke(favouriteJob) {
        return this.favouriteJobsRepository.addFavouriteJobToUser(favouriteJob);
    }
}
