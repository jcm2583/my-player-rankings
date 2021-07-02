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
    .query(queryText, [player.first_name, player.last_name, player.position, player.team, player.notes, player.image_url, req.user.id])
    .then( result => {
        res.sendStatus(201);
    })
    .catch( err => {
        console.log('There was an error in mw server side post', err);
        res.sendStatus(500);
    });
})

//need to create a get route to retrieve my watchlist players from database
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
    //define query to send to database
    const queryText = `SELECT * FROM "watchlist" WHERE "user_id" = $1
    ORDER BY "last_name" ASC;`;
        
    //use pool to send request to database
    pool
    .query(queryText, [req.user.id])
    .then( result => {
        res.send(result.rows);
    })
    .catch( err => {
        console.log('There was an error in mw server side get', err);
        res.sendStatus(500);
    })
    } else {
        res.sendStatus(403);
    };
})

//need to create a delete route to remove player from server
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params is', req.params);
    console.log('req.user is', req.user);
    
    //define query text of what to delete
    const queryText = `DELETE FROM "watchlist" WHERE "id" = $1 AND "user_id" = $2;`

    //use pool to send the data to the database
    pool
    .query(queryText, [req.params.id, req.user.id])
    .then( result => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('There was an error in mw server side delete', err);
        res.sendStatus(500);
    });
})

module.exports = router;