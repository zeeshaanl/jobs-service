import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class User {
    /**
     *
     * @param {string} uid
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} telephone
     */
    constructor({ uid, firstName, lastName, email, telephone }) {
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.createdDate = new Date();
        hasAllProperties(this);
        Object.freeze(this);
    }
}