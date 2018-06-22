import hasAllProperties from '../../lib/HasAllPropertiesValidation';
import * as crypto from 'crypto';

export default class Job {
    /**
     *
     * @param {string} title
     * @param {string} companyName
     * @param {string} description
     * @param {string} applyLink
     * @param {string} location
     * @param {string=} tags
     */
    constructor({ title, companyName, description, applyLink, location, tags }) {
        this.id = Job.createJobHash(title, companyName, location);
        this.title = title;
        this.companyName = companyName;
        this.description = description;
        this.applyLink = applyLink;
        this.location = location;
        this.tags = tags;
        this.createdDate = new Date();
        hasAllProperties(this, ['tags']);
        Object.freeze(this);
    }

    static createJobHash(title, companyName, location) {
        // TODO take only first 8 chars
        return crypto.createHash('md5').update(`${title}${companyName}${location}`).digest("hex");
    }
}
