require('dotenv').config();
import ImportJobsFromXingFilesystem from '../test/unit/mock/ImportXingJobsFilesystem';
import XingImplementation from '../src/infrastructure/provider/Xing/XingImplementation';
import ImportJobsUseCase from '../src/application/usecase/ImportJobsUseCase';
// import InMemoryRepo from '../src/infrastructure/repository/InMemoryRepo';
import SearchObject from '../src/domain/searchObject/SearchObject';
import FindJobsUseCase from '../src/application/usecase/FindJobsUseCase';
import SequelizeRepo from '../src/infrastructure/repository/SequelizeRepo';
import SequelizeDatabaseObject from '../src/infrastructure/repository/database/SequelizeDatabaseInit';

const sequelizeDatabaseObject = new SequelizeDatabaseObject();
const sequelizeRepo = new SequelizeRepo(sequelizeDatabaseObject);

const jobRun = async () => {
    const apiService = ImportJobsFromXingFilesystem;
    const xingImplementation = new XingImplementation(apiService);

    const importJobsUseCase = new ImportJobsUseCase(sequelizeRepo);

    try {
        await importJobsUseCase.invoke(xingImplementation);
    } catch (e) {
        console.log(e);
    }
};

const searchJobs = () => {
    const searchObject = new SearchObject({
        city: 'Hamburg',
        jobTitle: 'Remote bis zu 50'
    });

    const findJobsUseCase = new FindJobsUseCase(sequelizeRepo);

    return findJobsUseCase.invoke(searchObject);
};

const runProgram = async () => {
    try {
        await jobRun();
    } catch(e) {
        console.log(e);
    }
    // console.log(InMemoryRepo.inMemoryVariable);
    // const jobs = await searchJobs();
    // console.log(jobs);
};

runProgram();
