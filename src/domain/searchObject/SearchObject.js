export default class SearchObject {
    /**
     *
     * @param {string=} jobTitle
     * @param {string=} companyName
     * @param {string=} city
     */
    constructor({ jobTitle, companyName, city }) {
        this.jobTitle = jobTitle;
        this.companyName = companyName;
        this.city = city;
    }
}