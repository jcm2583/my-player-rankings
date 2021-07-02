const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//need to create a post route to post player to database
router.post('/', (req, res) => {
    //need to define queryText
    console.log(req.body);
    console.log(req.user);
    // const queryText = `INSERT INTO "watchlist" ("first_name", "last_name", "position", "team", "notes", "image_url", "user_id")
    // VALUES ($1, $2, $3, $4, $5, $6, $7)`
})

module.exports = router;