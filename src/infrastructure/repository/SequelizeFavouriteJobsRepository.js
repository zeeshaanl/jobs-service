import { FavouriteJobsRepository } from '../../domain/repository/FavouriteJobsRepository';

/**
 * @implements {FavouriteJobsRepository}
 */
export default class SequelizeFavouriteJobsRepository extends FavouriteJobsRepository {
    /**
     *
     * @param sequelizeDatabaseObject
     */
    constructor(sequelizeDatabaseObject) {
        super();
        this.sequelizeDatabaseObject = sequelizeDatabaseObject;
        this.users = this.sequelizeDatabaseObject.sequelizeInstance.define('favouriteJobs', {
            userId: {
                type: this.sequelizeDatabaseObject.sequelize.STRING,
                allowNull: false
            },
            jobId: {
                type: this.sequelizeDatabaseObject.sequelize.STRING,
                allowNull: false
            },
        }, {
            timestamps: false
        });
    }

    /**
     *
     * @param {string} userId
     * @param {string} jobId
     * @returns {Promise<void>}
     *
     */
    addFavouriteJobToUser(userId, jobId) {

    }
}
