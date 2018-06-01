/**
 * @name FavouriteJobsRepository
 * @interface
 */
export class FavouriteJobsRepository {
    /**
     *
     * @param {string} userId
     * @param {string} jobId
     * @returns {Promise<void>}
     *
     */
    addFavouriteJobToUser(userId, jobId) {
        throw new Error('Not implemented yet');
    }
}