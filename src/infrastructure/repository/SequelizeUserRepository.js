import JobViewModel from '../viewModel/JobViewModel';
import { JobsRepository } from '../../domain/repository/JobsRepository';
import User from '../../domain/entity/User';
import { UserRepository } from '../../domain/repository/UserRepository';

/**
 * @implements {UserRepository}
 */
export default class SequelizeUserRepository extends UserRepository {
    /**
     *
     * @param sequelizeDatabaseObject
     */
    constructor(sequelizeDatabaseObject) {
        super();
        this.sequelizeDatabaseObject = sequelizeDatabaseObject;
        this.users = this.sequelizeDatabaseObject.sequelizeInstance.define('users', {
            id: { type: this.sequelizeDatabaseObject.sequelize.UUID, primaryKey: true, allowNull: false },
            firstName: {
                type: this.sequelizeDatabaseObject.sequelize.STRING
            },
            lastName: {
                type: this.sequelizeDatabaseObject.sequelize.STRING
            },
            email: {
                type: this.sequelizeDatabaseObject.sequelize.STRING
            },
            telephone: {
                type: this.sequelizeDatabaseObject.sequelize.STRING
            }
        }, {
            timestamps: false
        });
    }

    /**
     *
     * @param {User} user
     * @returns {Promise<void>}
     */
    async createUser(user) {
        await this.users.create(user);
    }

    /**
     *
     * @param {string} id
     */
    async getUserById(id) {
        const user = await this.users.findById(id);
        const { id: uid, firstName, lastName, email, telephone } = user.dataValues;
        return new User({ id: uid, firstName, lastName, email, telephone })
    }

    // /**
    //  *
    //  * @param {Array.<Job>} jobs
    //  */
    // saveJobs(jobs) {
    //     jobs.forEach(job => {
    //         this.sequelizeDatabaseObject.jobs.create(job)
    //     });
    // }
    //
    // /**
    //  * @param {Job} job
    //  * @return {Promise<void>}
    //  */
    // saveCustomJob(job) {
    //     return this.sequelizeDatabaseObject.jobs.create(job);
    // }
    //
    // /**
    //  *
    //  * @param {SearchObject} searchObject
    //  * @returns {Promise<Array.<Job>>}
    //  */
    // async searchForJobs(searchObject) {
    //     const { op } = this.sequelizeDatabaseObject;
    //
    //     // @Todo Use match against
    //     const jobsFromDatabase = await this.sequelizeDatabaseObject.jobs.findAll({
    //         where: {
    //             city: {
    //                 [searchObject.location ? op.eq : op.ne]: searchObject.location || null
    //             },
    //             companyName: {
    //                 [searchObject.companyName ? op.eq : op.ne]: searchObject.companyName || null
    //             },
    //             [op.or]: [
    //                 {
    //                     tags: {
    //                         [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
    //                     }
    //                 },
    //                 {
    //                     title: {
    //                         [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
    //                     }
    //                 },
    //                 {
    //                     description: {
    //                         [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
    //                     }
    //                 },
    //             ]
    //         }
    //     });
    //
    //     return jobsFromDatabase.map(job => {
    //         const { id, title, companyName, description, applyLink, location } = job.dataValues;
    //         return new JobViewModel({
    //             id,
    //             title,
    //             companyName,
    //             description,
    //             applyLink,
    //             location
    //         })
    //     });
    // }
}
