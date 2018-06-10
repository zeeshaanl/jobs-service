import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class FavouriteJob {
    /**
     *
     * @param {string} userId
     * @param {string} jobId
     */
    constructor({ userId, jobId }) {
        this.userId = userId;
        this.jobId = jobId;
        hasAllProperties(this);
        Object.freeze(this);
    }
}
