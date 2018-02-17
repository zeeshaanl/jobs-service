import hasAllProperties from '../../lib/HasAllPropertiesValidation';
import * as crypto from 'crypto';

export default class JobViewModel {
    /**
     *
     * @param {string} id
     * @param {string} title
     * @param {string} companyName
     * @param {string} description
     * @param {string} applyLink
     * @param {string} city
     */
    constructor({ id, title, companyName, description, applyLink, city }) {
        this.id = id;
        this.title = title;
        this.companyName = companyName;
        this.description = description;
        this.applyLink = applyLink;
        this.city = city;
        hasAllProperties(this);
        Object.freeze(this);
    }
}