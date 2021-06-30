const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//create a post route to post new player object to the database
router.post('/', (req, res) => {
    console.log(req.body);
})


module.exports = router;