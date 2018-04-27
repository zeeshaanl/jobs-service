import WorkingNomadsApiServiceFilesystemMock from '../../../test/unit/mock/WorkingNomadsApiServiceFilesystemMock.js';
import XingImplementation from '../../../src/infrastructure/provider/Xing/XingImplementation';
import Job from '../../../src/domain/entity/Job';
import ApiServiceFilesystemMock from '../../unit/mock/XingApiServiceFilesystemMock';
import WorkingNomadsImplementation from '../../../src/infrastructure/provider/WorkingNomads/WorkingNomadsImplementation';
import WorkingNomadsApiService from '../../../src/infrastructure/provider/WorkingNomads/WorkingNomadsApiService';

test('Get Jobs from Working Nomads', async () => {
    try {
        expect.assertions(1);
        const apiService = new WorkingNomadsApiService();
        const rawJsonJobs = await apiService.getRawJobsString();

        expect(rawJsonJobs).toBeDefined();
    } catch (e) {
        console.dir(e);
        throw e;
    }
});

test('Test mapping from Working Nomads', async () => {
    try {
        expect.assertions(1);
        const apiService = new WorkingNomadsApiService();
        const wn = new WorkingNomadsImplementation(apiService);
        const mappedJobs = await wn.importJobs();
        console.log(mappedJobs);
        expect(mappedJobs).toBeDefined();
    } catch (e) {
        console.dir(e);
        throw e;
    }
});
