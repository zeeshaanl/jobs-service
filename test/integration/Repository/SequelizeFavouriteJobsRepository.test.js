import 'dotenv/config';
import SequelizePostgresDatabaseInit from '../../../src/infrastructure/repository/database/SequelizePostgresDatabaseInit';
import SequelizeFavouriteJobsRepository from '../../../src/infrastructure/repository/SequelizeFavouriteJobsRepository';
import FavouriteJob from '../../../src/domain/entity/FavouriteJob';

test('Create Favourite Job', async () => {
    try {
        const sequelizeDatabaseObject = new SequelizePostgresDatabaseInit();
        const sequelizeFavouriteJobsRepository = new SequelizeFavouriteJobsRepository(sequelizeDatabaseObject);
        const userId = 'a11abaaa1eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhNzE5ZDE4MjQ2OTAyN2ZkYWQ5YzVlMjVmNTA0NWUzZjRhZTBjMTAifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam9iaS05ZGZkMCIsImF1ZCI6ImpvYmktOWRmZDAiLCJhdXRoX3RpbWUiOjE1Mjc4NTU4NjMsInVzZXJfaWQiOiI0V1NZTUNXT2x4UXU0b0RVMW1id3o3REN6aGIyIiwic3ViIjoiNFdTWU1DV09seFF1NG9EVTFtYnd6N0RDemhiMiIsImlhdCI6MTUyNzg1NTg2MywiZXhwIjoxNTI3ODU5NDYzLCJlbWFpbCI6ImFtMzQ1MzQ1QGhhcHB5Y2FyLmRlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFtMzQ1MzQ1QGhhcHB5Y2FyLmRlIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fZw8P_en0R6bf_B_cbNgrkF0Z2fqKFe_K9upD5Sp84axmsEaqkSnO1jrvbUk01icM8huX5fBi4KK7M6rU5tVfbaUOqPlT1mVv-IZ1a5-MrJ0CDTP7UEf9Bq303mvsjeZ8ozh5iCG6-J1YGDZ7ddKXmIypWcgVuTBig9VvpyLeXNCvr7Vgt01TklXLDT0KZndFzyKJ7D9AMaYhynmo7HagwL6Jm3XN78yGv491Yg0jhcLxZPQg-7Ad0Jkil6HjDVvCQptFVNsM-KNsbSzVkw1Kdp5qkAaH--aLign6SPHzVKO3B4uaOPCC8_F5kXmK2iaYFSMD2o9dXNRugrna2ReXQ';
        const jobId = 'aa3test1';
        const favouriteJob = new FavouriteJob({ userId, jobId });
        console.log(favouriteJob.id, 'in test job id');

        await sequelizeFavouriteJobsRepository.addFavouriteJobToUser(favouriteJob);
        const receivedFavouriteJobs = await sequelizeFavouriteJobsRepository.getFavouriteJobsOfUser(userId);
        const recentlySavedFavourite = receivedFavouriteJobs.find(favouriteJobObject => favouriteJobObject.userId === userId && favouriteJobObject.jobId === jobId);

        expect(recentlySavedFavourite).toEqual(favouriteJob);
    }
    catch (e) {
        console.dir(e);
        throw e;
    }
}, 5000);
