import Job from '../../domain/entity/Job';

/**
 * @implements {JobsRepository}
 */
export default class sequelizeRepo {
    /**
     *
     * @param sequelizeDatabaseObject
     */
    constructor(sequelizeDatabaseObject) {
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
     *
     * @param {SearchObject} searchObject
     */
    async searchForJobs(searchObject) {
        const { op } = this.sequelizeDatabaseObject;

        // @Todo Use match against
        const jobsFromDatabase = await this.sequelizeDatabaseObject.jobs.findAll({
            where: {
                city: {
                    [searchObject.city ? op.eq : op.ne]: searchObject.city || null
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
            const { id, title, companyName, description, applyLink, city, tags } = job.dataValues;
            return new Job({
                id,
                title,
                companyName,
                description,
                applyLink,
                city,
                tags
            })
        });

    }
}