const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//create a post route to post new player object to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    const player = req.body;
    console.log(player);
    console.log(req.user);
    // define query to post
    const queryText = `INSERT INTO "players" ("overall_rank", "position_rank", "first_name", 
    "last_name", "number", "position", "team", "stats_url", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
    //use pool.query to post info to database under specific user
    pool.query(queryText, [player.overall_rank, player.position_rank, player.first_name, 
    player.last_name, player.number, player.position, player.team, player.stats_url, req.user.id])
    .then( result => {
        res.sendStatus(201);
    }).catch (err => {
        console.log('There was an error in server side POST', err);
        res.sendStatus(500);
    });
});


module.exports = router;