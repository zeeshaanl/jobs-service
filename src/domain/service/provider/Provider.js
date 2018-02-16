/**
 * @name Provider
 * @interface
 */
export class Provider {
    /**
     * @method
     * @name Provider#importJobs
     * @returns {Promise.<Array.<Job>>}
     */
    importJobs() {
        throw new Error('Not yet implemented');
    }
}
