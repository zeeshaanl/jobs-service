import raven from 'raven';
import appContainerInstance from '../src/AppContainer';
// import XingApiServiceFilesystemMock from '../test/unit/mock/XingApiServiceFilesystemMock';
import XingImplementation from '../src/infrastructure/provider/Xing/XingImplementation';
import XingApiService from '../src/infrastructure/provider/Xing/XingApiService';
// import WorkingNomadsApiServiceFilesystemMock from '../test/unit/mock/WorkingNomadsApiServiceFilesystemMock';
import WorkingNomadsImplementation from '../src/infrastructure/provider/WorkingNomads/WorkingNomadsImplementation';
import WorkingNomadsApiService from '../src/infrastructure/provider/WorkingNomads/WorkingNomadsApiService';
import logger from '../src/lib/logger';

raven.config(process.env.SENTRY_URL).install();

try {
    logger.log({
        level: 'info',
        message: 'Cron Job started'
    });
    const xingApiService = new XingApiService;
    const xingImplementation = new XingImplementation(xingApiService);

    const workingNomadsApiService = new WorkingNomadsApiService();
    const workingNomadsImplementation = new WorkingNomadsImplementation(workingNomadsApiService);

    const providers = [xingImplementation, workingNomadsImplementation];

    appContainerInstance.importJobsUseCase.invoke(providers);

} catch (e) {
    console.log(e, 'ERROR IN CRON');
    logger.log({
        level: 'cron error',
        message: e
    });
    raven.captureException(e);
}
