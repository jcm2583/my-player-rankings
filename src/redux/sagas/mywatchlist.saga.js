import axios from "axios";

const { takeLatest } = require("@redux-saga/core/effects");

//create a functin that will send the player to the server
function* addToWatchlist (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/my-watchlist', action.payload)
        //will need to re-render with get saga once written
    } catch (err) {
        console.log('There was an error in the watchlist saga', err);
    }
}


function* myWatchlistSaga () {
    yield takeLatest('ADD_TO_WATCHLIST', addToWatchlist)
}

export default myWatchlistSaga;