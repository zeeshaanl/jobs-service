import appContainerInstance from '../src/AppContainer';
import ImportJobsFromXingFilesystem from '../test/unit/mock/ImportXingJobsFilesystem';
import XingImplementation from '../src/infrastructure/provider/Xing/XingImplementation';

const apiService = ImportJobsFromXingFilesystem;
const xingImplementation = new XingImplementation(apiService);

appContainerInstance.importJobsUseCase.invoke(xingImplementation);
