import raven from 'raven';
import appContainerInstance from '../src/AppContainer';
import XingApiServiceFilesystemMock from '../test/unit/mock/XingApiServiceFilesystemMock';
import XingImplementation from '../src/infrastructure/provider/Xing/XingImplementation';
import XingApiService from '../src/infrastructure/provider/Xing/XingApiService';
import WorkingNomadsApiServiceFilesystemMock from '../test/unit/mock/WorkingNomadsApiServiceFilesystemMock';
import WorkingNomadsImplementation from '../src/infrastructure/provider/WorkingNomads/WorkingNomadsImplementation';

raven.config(process.env.SENTRY_URL).install();

try {
    const xingApiService = new XingApiService;
    const xingImplementation = new XingImplementation(xingApiService);

    const workingNomadsApiService = new WorkingNomadsApiServiceFilesystemMock;
    const workingNomadsImplementation = new WorkingNomadsImplementation(workingNomadsApiService);

    const providers = [xingImplementation, workingNomadsImplementation];

    appContainerInstance.importJobsUseCase.invoke(providers);

} catch (e) {
    console.log(e, 'ERROR IN CRON');
    raven.captureException(e);
}
