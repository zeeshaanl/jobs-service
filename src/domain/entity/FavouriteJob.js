import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class FavouriteJob {
    /**
     *
     * @param {string} uid
     * @param {string} jobIds
     */
    constructor({ uid, jobId }) {
        this.uid = uid;
        this.jobId = jobId;
        hasAllProperties(this);
        Object.freeze(this);
    }
}
