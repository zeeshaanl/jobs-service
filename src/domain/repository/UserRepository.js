/**
 * @name UserRepository
 * @interface
 */
export class UserRepository {
    /**
     *
     * @param {User} user
     * @returns {Promise<void>}
     */
    createUser(user) {
        throw new Error('Not implemented yet');
    }

    /**
     *
     * @param {string} userId
     * @returns {Promise<User>}
     */
    getUserById(userId) {
        throw new Error('Not implemented yet');
    }
}
