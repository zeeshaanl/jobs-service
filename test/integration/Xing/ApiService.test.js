import ApiService from '../../../src/infrastructure/provider/Xing/XingApiService';

test('Get Jobs from Xing', async () => {
    try {
        expect.assertions(1);
        const apiService = new ApiService();
        const rawXml = await apiService.getRawJsonJobs();
        expect(rawXml).toBeDefined();
    } catch (e) {
        console.dir(e);
        throw e;
    }
});
