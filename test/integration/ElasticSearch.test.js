import ElasticSearch from '../../src/infrastructure/repository/ElasticSearch';
import SearchObject from '../../src/domain/searchObject/SearchObject';
import JobViewModel from '../../src/infrastructure/viewModel/JobViewModel';

test('Initialise Elastic Search Repo and create jobs', () => {
    try {
        const elasticSearch = new ElasticSearch();
        elasticSearch.createJobs();
    } catch (e) {
        throw e;
    }
});

test('Search for jobs in Elastic Search', async () => {
    try {
        const elasticSearch = new ElasticSearch();

        const jobTitle = "Sicherheitsüberwachungstechnik";
        const location = "Dortmund";

        const searchObject = new SearchObject({
            jobTitle,
            location
        });
        const jobs = await elasticSearch.searchForJobs(searchObject);
        expect(Array.isArray(jobs)).toBe(true);
    } catch (e) {
        throw e;
    }
});