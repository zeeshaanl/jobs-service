import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class FavouriteJobs {
    /**
     *
     * @param {string} uid
     * @param {array} jobIds
     */
    constructor({ uid, jobIds }) {
        this.uid = uid;
        this.jobId = jobId;
        hasAllProperties(this);
        Object.freeze(this);
    }
}
