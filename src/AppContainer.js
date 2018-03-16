import 'dotenv/config';
import FindJobsUseCase from './application/usecase/FindJobsUseCase';
import SequelizeRepo from './infrastructure/repository/SequelizeRepo';
import ImportJobsUseCase from './application/usecase/ImportJobsUseCase';
import SequelizeDatabaseObject from './infrastructure/repository/database/SequelizeDatabaseInit';
import ElasticSearch from './infrastructure/repository/ElasticSearch';

class AppContainer {
    constructor() {
        const sequelizeDatabaseObject = new SequelizeDatabaseObject();
        const sequelizeRepo = new SequelizeRepo(sequelizeDatabaseObject);

        const elastsearchRepo = new ElasticSearch();

        this.importJobsUseCase = new ImportJobsUseCase(sequelizeRepo);
        this.findJobsUseCase = new FindJobsUseCase(sequelizeRepo);
    }
}

const appContainerInstance = new AppContainer();

export default appContainerInstance;