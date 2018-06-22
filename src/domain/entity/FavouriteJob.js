import hasAllProperties from '../../lib/HasAllPropertiesValidation';
import uuidV4 from 'uuid/v4';

export default class FavouriteJob {
    /**
     * @param {string} id
     * @param {string} userId
     * @param {string} jobId
     */
    constructor({ userId, jobId, id = uuidV4() }) {
        this.id = id;
        this.userId = userId;
        this.jobId = jobId;
        hasAllProperties(this);
        Object.freeze(this);
    }
}
