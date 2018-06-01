import hasAllProperties from '../../lib/HasAllPropertiesValidation';

export default class User {
    /**
     *
     * @param {string} id
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} telephone
     */
    constructor({ id, firstName, lastName, email, telephone }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        hasAllProperties(this);
        Object.freeze(this);
    }
}