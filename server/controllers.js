const db = require('../database');
const dbHelpers = require('../database/dbHelpers');

module.exports = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  post: (req, res) => {
    dbHelpers.post(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
};
