import XingImplementation from '../../../src/infrastructure/provider/Xing/XingImplementation';
import ApiServiceFilesystemMock from '../../unit/mock/XingApiServiceFilesystemMock';

// const xing = new XingImplementation(ImportJobsFromXingFilesystem);

test('Get jobs from Api service', async () => {
    try {
        const apiServiceFilesystemMock = new ApiServiceFilesystemMock();
        const jobs = await apiServiceFilesystemMock.getRawJsonJobs();
        expect(jobs).toBeDefined();
    } catch (e) {
        console.dir(e);
        throw e;
    }
}, 10000);

// test('Xing Implementation', async () => {
//     try {
//         const jobs = await xing.importJobs();
//         expect(jobs).toBeDefined();
//     } catch (e) {
//         console.dir(e);
//         throw e;
//     }
// }, 10000);