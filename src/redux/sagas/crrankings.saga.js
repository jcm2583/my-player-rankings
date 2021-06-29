import axios from 'axios';
import { all, takeLatest } from 'redux-saga/effects';

//create a function to get CR players from database
function* fetchCrPlayers () {
    //use axios to fetch CR players
    try {
        const response = yield axios.get('/api/consensus-rankings')
        console.log(response.data);
    }
    catch (err) {
        console.log('fetchCrPlayers has an error', err);
    }
}



//create a saga listener to fetch players from ConsensusRankings.jsx page
function* crPlayerSaga () {
    yield takeLatest('FETCH_CR_PLAYERS', fetchCrPlayers )
}

export default crPlayerSaga;