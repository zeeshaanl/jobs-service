import 'dotenv/config';
import FindJobsUseCase from './application/usecase/FindJobsUseCase';
import SequelizeUserRepository from './infrastructure/repository/SequelizeUserRepository';
import ImportJobsUseCase from './application/usecase/ImportJobsUseCase';
import SequelizePostgresDatabaseInit from './infrastructure/repository/database/SequelizePostgresDatabaseInit';
import ElasticSearchJobsRepository from './infrastructure/repository/ElasticSearchJobsRepository';
import SaveCustomJob from './application/usecase/SaveCustomJob';
import Logger from './lib/Logger';
import UserSignup from './application/usecase/UserSignup';
import AddJobToFavouritesUseCase from './application/usecase/AddJobToFavouritesUseCase';
import SequelizeFavouriteJobsRepository from './infrastructure/repository/SequelizeFavouriteJobsRepository';

class AppContainer {
    constructor() {
        const SequelizePostgresDatabaseObject = new SequelizePostgresDatabaseInit();
        const sequelizeUserRepository = new SequelizeUserRepository(SequelizePostgresDatabaseObject);
        const sequelizeFavouriteJobsRepository = new SequelizeFavouriteJobsRepository(SequelizePostgresDatabaseObject);

        const elasticSearchJobsRepository = new ElasticSearchJobsRepository();

        this.importJobsUseCase = new ImportJobsUseCase(elasticSearchJobsRepository);

        this.findJobsUseCase = new FindJobsUseCase(elasticSearchJobsRepository);
        this.saveCustomJobUseCase = new SaveCustomJob(elasticSearchJobsRepository);

        this.userSignupUseCase = new UserSignup(sequelizeUserRepository);

        this.addJobToFavouritesUseCase = new AddJobToFavouritesUseCase(sequelizeFavouriteJobsRepository);

        this.loggerInstance = new Logger();

        process.on('unhandledRejection', (reason, promise) => {
            this.loggerInstance.logger.error(`Unhandled Rejection caught! Promise: ${promise} | Reason: ${reason.stack || reason}`);
        });
    }
}

const appContainerInstance = new AppContainer();

export default appContainerInstance;
