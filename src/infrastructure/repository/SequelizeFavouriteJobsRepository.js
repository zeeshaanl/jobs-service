import { FavouriteJobsRepository } from '../../domain/repository/FavouriteJobsRepository';
import FavouriteJob from '../../domain/entity/FavouriteJob';

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
        this.favouriteJobs = this.sequelizeDatabaseObject.sequelizeInstance.define('favouriteJobs', {
            userId: {
                type: this.sequelizeDatabaseObject.sequelize.STRING,
                allowNull: false
            },
            jobId: {
                type: this.sequelizeDatabaseObject.sequelize.STRING,
                allowNull: false
            },
        }, {
            indexes: [
                {
                    unique: true,
                    fields: ['userId', 'jobId']
                }
            ]
        });
    }

    /**
     *
     * @param {FavouriteJob} favouriteJob
     * @returns {Promise<void>}
     *
     */
    async addFavouriteJobToUser(favouriteJob) {
        await this.favouriteJobs.create(favouriteJob);
    }

    /**
     *
     * @param userId
     * @returns {Promise<Array<Job>>}
     */
    async getFavouriteJobsOfUser(userId) {
        const favouriteJobs = await this.favouriteJobs.findAll({
            where: {
                userId: userId
            }
        });
        return favouriteJobs.map(favouriteJob => {
                return new FavouriteJob({
                    userId: favouriteJob.userId,
                    jobId: favouriteJob.jobId,
                    id: favouriteJob.id,
                })
            }
        )
    }
}
