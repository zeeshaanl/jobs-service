/**
 * @name JobsRepository
 * @interface
 */
export class JobsRepository {
    /**
     * @method
     * @name JobsRepository#saveJobs
     * @param {Array<Job>} jobs.
     * @returns {Array<Job>}
     */
    saveJobs(jobs) {
        throw new Error('Not yet implemented');
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @returns {Array.<Job>}
     */
    searchForJobs(searchObject) {
        throw new Error('Not implemented yet')
    }

    //
    // /**
    //  * @method
    //  * @name JobsRepository#getJobsById
    //  * @param {string} id
    //  * @returns {Job}
    //  */
    // getJobById(id) {
    //     throw new Error('Not yet implemented');
    // }
    //
    // /**
    //  * @method
    //  * @name JobsRepository#getAllJobs
    //  * @returns {Array.<Job>}
    //  */
    // getAllJobs() {
    //     throw new Error('Not yet implemented');
    // }
}