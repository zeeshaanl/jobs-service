export default class GetFavouriteJobUseCase {
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
     * @returns {Promise<Array<Job>>}
     */
    invoke(userId) {
        return this.favouriteJobsRepository.getFavouriteJobsOfUser(userId);
    }
}
