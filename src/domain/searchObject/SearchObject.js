export default class SearchObject {
    /**
     *
     * @param {string=} jobTitle
     * @param {string=} companyName
     * @param {string=} location
     */
    constructor({ jobTitle, companyName, location }) {
        this.jobTitle = jobTitle;
        this.companyName = companyName;
        this.location = location;
    }
}