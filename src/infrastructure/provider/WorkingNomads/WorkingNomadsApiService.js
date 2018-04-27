import request from 'request-promise';

export default class WorkingNomadsApiService {
    async getRawJobsString() {
        return request('https://www.workingnomads.co/api/exposed_jobs/');
    }
}
