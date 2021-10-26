'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /turtle_species/{id}
 */
module.exports = {
    /**
     * summary: get information about a turtle_species
     * description: 
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getturtle_species
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/turtle_species/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/turtle_species/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
