const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//need to create a get request to retrieve homepage data from the database
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
    //define queryText for database
    const queryText = `SELECT * FROM "top_performers" ORDER BY "id";`;
    //use pool to send to database
    pool
    .query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('There was an error in server side homepage get', err);
        res.sendStatus(500);
    })
    } else {
        res.sendStatus(403);
    }
})








module.exports = router;


