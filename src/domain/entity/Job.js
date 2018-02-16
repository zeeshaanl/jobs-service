import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class Job {
    /**
     *
     * @param {int} id
     * @param {string} title
     * @param {string} companyName
     * @param {string} description
     * @param {string} applyLink
     * @param {string} city
     * @param {string=} tags
     */
    constructor({ id, title, companyName, description, applyLink, city, tags }) {
        this.id = id;
        this.title = title;
        this.companyName = companyName;
        this.description = description;
        this.applyLink = applyLink;
        this.city = city;
        this.tags = tags;
        hasAllProperties(this, ['tags']);
        Object.freeze(this);
    }
}