import ElasticSearch from '../../src/infrastructure/repository/ElasticSearch';

test('Initialise Elastic Search Repo', () => {
    try {
        const elasticSearch = new ElasticSearch();
        // elasticSearch.createJobs();
        elasticSearch.searchJobs();
        expect(elasticSearch).toBeDefined();
    } catch (e) {
        throw e;
    }
});