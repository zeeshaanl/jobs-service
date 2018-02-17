import hasAllProperties from '../../lib/HasAllPropertiesValidation';
import * as crypto from 'crypto';

export default class Job {
    /**
     *
     * @param {string} title
     * @param {string} companyName
     * @param {string} description
     * @param {string} applyLink
     * @param {string} city
     * @param {string=} tags
     */
    constructor({ title, companyName, description, applyLink, city, tags }) {
        this.id = Job.createJobHash(title, companyName, city);
        this.title = title;
        this.companyName = companyName;
        this.description = description;
        this.applyLink = applyLink;
        this.city = city;
        this.tags = tags;
        hasAllProperties(this, ['tags']);
        Object.freeze(this);
    }

    static createJobHash(title, companyName, city) {
        return crypto.createHash('md5').update(`${title}${companyName}${city}`).digest("hex");
    }
}