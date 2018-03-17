import 'dotenv/config';
import FindJobsUseCase from './application/usecase/FindJobsUseCase';
import SequelizeRepo from './infrastructure/repository/SequelizeRepo';
import ImportJobsUseCase from './application/usecase/ImportJobsUseCase';
import SequelizeDatabaseObject from './infrastructure/repository/database/SequelizeDatabaseInit';
import ElasticSearch from './infrastructure/repository/ElasticSearch';
import SaveCustomJob from './application/usecase/SaveCustomJob';

class AppContainer {
    constructor() {
        const sequelizeDatabaseObject = new SequelizeDatabaseObject();
        const sequelizeRepo = new SequelizeRepo(sequelizeDatabaseObject);

        const elasticSearchRepo = new ElasticSearch();

        this.importJobsUseCase = new ImportJobsUseCase(elasticSearchRepo);
        this.findJobsUseCase = new FindJobsUseCase(elasticSearchRepo);
        this.saveCustomJobUseCase = new SaveCustomJob(elasticSearchRepo);
    }
}

const appContainerInstance = new AppContainer();

export default appContainerInstance;