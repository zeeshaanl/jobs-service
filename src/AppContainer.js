import 'dotenv/config';
import FindJobsUseCase from './application/usecase/FindJobsUseCase';
import SequelizeRepo from './infrastructure/repository/UserRepoImpl';
import ImportJobsUseCase from './application/usecase/ImportJobsUseCase';
import SequelizeDatabaseObject from './infrastructure/repository/database/SequelizeDatabaseInit';
import ElasticSearch from './infrastructure/repository/ElasticSearch';
import SaveCustomJob from './application/usecase/SaveCustomJob';
import Logger from './lib/Logger';
import UserSignup from './application/usecase/UserSignup';

class AppContainer {
    constructor() {
        const sequelizeDatabaseObject = new SequelizeDatabaseObject();
        const sequelizeRepo = new SequelizeRepo(sequelizeDatabaseObject);

        const elasticSearchRepo = new ElasticSearch();

        this.importJobsUseCase = new ImportJobsUseCase(elasticSearchRepo);

        this.findJobsUseCase = new FindJobsUseCase(elasticSearchRepo);
        this.saveCustomJobUseCase = new SaveCustomJob(elasticSearchRepo);

        this.userSignupUseCase = new UserSignup(sequelizeRepo);

        this.loggerInstance = new Logger();

        process.on('unhandledRejection', (reason, promise) => {
            this.loggerInstance.logger.error(`Unhandled Rejection caught! Promise: ${promise} | Reason: ${reason.stack || reason}`);
        });
    }
}

const appContainerInstance = new AppContainer();

export default appContainerInstance;