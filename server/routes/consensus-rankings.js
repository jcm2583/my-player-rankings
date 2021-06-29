const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in get c-r rankings get router');
  // Define query text to get from server
  const queryText = `SELECT * FROM "players"
  WHERE "user_id" is NULL
  ORDER BY "overall_rank" ASC;`
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch( err => {
    console.log("Error in server side GET:", err);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
