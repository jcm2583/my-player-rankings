const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const consensusRankings = require('./routes/consensus-rankings');
const myRankings = require('./routes/my-rankings');
const myWatchlist = require('./routes/my-watchlist');
const homepage = require('./routes/homepage')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/consensus-rankings', consensusRankings)
app.use('/api/my-rankings', myRankings)
app.use('/api/my-watchlist', myWatchlist)
app.use('/api/homepage', homepage);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
