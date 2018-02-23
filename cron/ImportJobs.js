import appContainerInstance from '../src/AppContainer';
import ApiServiceFilesystemMock from '../test/unit/mock/ApiServiceFilesystemMock';
import XingImplementation from '../src/infrastructure/provider/Xing/XingImplementation';
// import ApiService from '../src/infrastructure/provider/Xing/ApiService';

/*
When multiple providers exist store the implementations in an array like this:
const providers = [xingImplementation, indeedImplementation]
Then pass the Array to the UseCase that loops through each one and calls import jobs and saves to repo
*/

try {
    const apiService = new ApiServiceFilesystemMock;
    const xingImplementation = new XingImplementation(apiService);
    appContainerInstance.importJobsUseCase.invoke(xingImplementation);
} catch (e) {
    console.log(e);
}
