/**
 * @name FavouriteJobsRepository
 * @interface
 */
export class FavouriteJobsRepository {
    /**
     *
     * @param {FavouriteJob} favouriteJob
     * @returns {Promise<void>}
     *
     */
    addFavouriteJobToUser(favouriteJob) {
        throw new Error('Not implemented yet');
    }

    /**
     *
     * @param {string} userId
     * @returns {Promise<Array<Job>>}
     *
     */
    getFavouriteJobsOfUser(userId) {
        throw new Error('Not implemented yet');
    }
}