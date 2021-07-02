const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//need to create a post route to post player to database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body is', req.body);
    const player = req.body;
    console.log('req.user is', req.user);
    
    //need to define query to retrieve from database
    const queryText = `INSERT INTO "watchlist" ("first_name", "last_name", "position", "team", "notes", "image_url", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

    //use pool to send the request to the database
    pool
    .query(queryText, [player.firstName, player.lastName, player.position, player.team, player.notes, player.image, req.user.id])
    .then( result => {
        res.sendStatus(201);
    })
    .catch( err => {
        console.log('There was an error in mw server side post', err);
        res.sendStatus(500);
    });
})

module.exports = router;