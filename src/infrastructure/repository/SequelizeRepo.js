import JobViewModel from '../viewModel/JobViewModel';
import { JobsRepository } from '../../domain/repository/JobsRepository';

/**
 * @implements {JobsRepository}
 */
export default class SequelizeRepo extends JobsRepository {
    /**
     *
     * @param sequelizeDatabaseObject
     */
    constructor(sequelizeDatabaseObject) {
        super();
        this.sequelizeDatabaseObject = sequelizeDatabaseObject;
    }

    /**
     *
     * @param {Array.<Job>} jobs
     */
    saveJobs(jobs) {
        jobs.forEach(job => {
            this.sequelizeDatabaseObject.jobs.create(job)
        });
    }

    /**
     * @param {Job} job
     * @return {Promise<void>}
     */
    saveCustomJob(job) {
        return this.sequelizeDatabaseObject.jobs.create(job);
    }

    /**
     *
     * @param {SearchObject} searchObject
     * @returns {Promise<Array.<Job>>}
     */
    async searchForJobs(searchObject) {
        const { op } = this.sequelizeDatabaseObject;

        // @Todo Use match against
        const jobsFromDatabase = await this.sequelizeDatabaseObject.jobs.findAll({
            where: {
                city: {
                    [searchObject.location ? op.eq : op.ne]: searchObject.location || null
                },
                companyName: {
                    [searchObject.companyName ? op.eq : op.ne]: searchObject.companyName || null
                },
                [op.or]: [
                    {
                        tags: {
                            [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
                        }
                    },
                    {
                        title: {
                            [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
                        }
                    },
                    {
                        description: {
                            [searchObject.jobTitle ? op.like : op.ne]: searchObject.jobTitle ? `%${searchObject.jobTitle}%` : null
                        }
                    },
                ]
            }
        });

        return jobsFromDatabase.map(job => {
            const { id, title, companyName, description, applyLink, location } = job.dataValues;
            return new JobViewModel({
                id,
                title,
                companyName,
                description,
                applyLink,
                location
            })
        });
    }
}