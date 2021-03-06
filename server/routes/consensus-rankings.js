const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Will need 5 different get routes depending on position

//All players
router.get('/all', (req, res) => {
  if(req.isAuthenticated()) {
  // Define query text to get from server
  const queryText = `SELECT * FROM "players"
  WHERE "user_id" is NULL
  ORDER BY "overall_rank" ASC;`;
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
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
  WHERE "user_id" is NULL AND "position" = 'QB'
  ORDER BY "position_rank" ASC;`;
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
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
  WHERE "user_id" is NULL AND "position" = 'RB'
  ORDER BY "position_rank" ASC;`;
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
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
  WHERE "user_id" is NULL AND "position" = 'WR'
  ORDER BY "position_rank" ASC;`;
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
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
  WHERE "user_id" is NULL AND "position" = 'TE'
  ORDER BY "position_rank" ASC;`
  // use pool to retrieve the data
  pool.query(queryText).then(result => {
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
