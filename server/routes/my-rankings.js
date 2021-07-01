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

//Need to create 5 GET routes per position
router.get('/all', (req, res) => {
    if(req.isAuthenticated()) {
    // Define query text to get from server
    const queryText = `SELECT * FROM "players"
    WHERE "user_id" = $1
    ORDER BY "overall_rank" ASC;`
    // use pool to retrieve the data
    pool.query(queryText, [req.user.id]).then(result => {
        res.send(result.rows);
    }).catch( err => {
        console.log("Error in server side GET:", err);
        res.sendStatus(500);
    })
      } else {
        res.sendStatus(403);
      }
});

//Quarterbacks only
router.get('/qb', (req, res) => {
    if(req.isAuthenticated()) {
    // Define query text to get from server
    const queryText = `SELECT * FROM "players"
    WHERE "user_id" = $1 AND "position" = 'QB'
    ORDER BY SUBSTRING("position_rank" FROM '([0-9]+)')::BIGINT ASC;`
    // use pool to retrieve the data
    pool.query(queryText, [req.user.id]).then(result => {
      res.send(result.rows);
    }).catch( err => {
      console.log("Error in server side GET:", err);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});

//Running backs only
router.get('/rb', (req, res) => {
    if(req.isAuthenticated()) {
    // Define query text to get from server
    const queryText = `SELECT * FROM "players"
    WHERE "user_id" = $1 AND "position" = 'RB'
    ORDER BY SUBSTRING("position_rank" FROM '([0-9]+)')::BIGINT ASC;`
    // use pool to retrieve the data
    pool.query(queryText, [req.user.id]).then(result => {
      res.send(result.rows);
    }).catch( err => {
      console.log("Error in server side GET:", err);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});

//Wide receivers only
router.get('/wr', (req, res) => {
    if(req.isAuthenticated()) {
    // Define query text to get from server
    const queryText = `SELECT * FROM "players"
    WHERE "user_id" = $1 AND "position" = 'WR'
    ORDER BY SUBSTRING("position_rank" FROM '([0-9]+)')::BIGINT ASC;`
    // use pool to retrieve the data
    pool.query(queryText, [req.user.id]).then(result => {
      res.send(result.rows);
    }).catch( err => {
      console.log("Error in server side GET:", err);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});

//Tight ends only
router.get('/te', (req, res) => {
    if(req.isAuthenticated()) {
    // Define query text to get from server
    const queryText = `SELECT * FROM "players"
    WHERE "user_id" = $1 AND "position" = 'TE'
    ORDER BY SUBSTRING("position_rank" FROM '([0-9]+)')::BIGINT ASC;`
    // use pool to retrieve the data
    pool.query(queryText, [req.user.id]).then(result => {
      res.send(result.rows);
    }).catch( err => {
      console.log("Error in server side GET:", err);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});



module.exports = router;