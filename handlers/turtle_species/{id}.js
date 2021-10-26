'use strict';
var dataProvider = require('../../data/turtle_species/{id}.js');
var data = require('../../data/turtle_species/info.js');
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
     */
    get: function getturtle_species(req, res, next) {
        let docResult = data.turtle_species.find(record => record.id == req.params.id);
        console.log(docResult);
        if (docResult) {
          res.send(docResult);
        } else {
          res.status(405).send({
            "status": 405,
            "type": "validation error",
            "message": "id not found"
          });
        }
    }
};
