export default class UserSignup {
    /**
     *
     * @param {UserRepository} userRepository
     */
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    /**
     *
     * @param {User} user
     * @returns {Promise<void>}
     */
    async invoke(user) {
        await this.userRepository.createUser(user);
    }
}