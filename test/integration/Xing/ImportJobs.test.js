import XingImplementation from '../../../src/infrastructure/provider/Xing/XingImplementation';
import ImportJobsFromXingFilesystem from '../../unit/mock/ApiServiceFilesystemMock';

// const xing = new XingImplementation(ImportJobsFromXingFilesystem);

test('Get jobs from Api service', async () => {
    try {
        const jobs = await ImportJobsFromXingFilesystem();
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