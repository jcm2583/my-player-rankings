import axios from "axios";
import { put } from "redux-saga/effects";

const { takeLatest } = require("@redux-saga/core/effects");

//create a functin that will send the player to the server
function* addToWatchlist (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/my-watchlist', action.payload)
        //re-render with added player
        yield put({type: 'FETCH_WATCHLIST'});
    } catch (err) {
        console.log('There was an error in the add to watchlist saga', err);
    }
}

//create a function that will retrieve my-watchlist from the server
function* fetchWatchlist () {
    try {
        const response = yield axios.get('/api/my-watchlist')
        console.log(response.data);
        //send data to a reducer
        yield put({type: 'SET_WATCHLIST', payload: response.data})
    } catch (err) {
        console.log('There was an error in the fetch watchlist saga', err);
    }
}

//create a function to send player to be deleted from server
function* removeWatchlistPlayer (action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/my-watchlist/${action.payload.id}`)
        //need to re-render with updated list
        yield put({type: 'FETCH_WATCHLIST'});
    } catch (err) {
        console.log('There was an error in the delete watchlist', err);
    }
}


function* myWatchlistSaga () {
    yield takeLatest('ADD_TO_WATCHLIST', addToWatchlist);
    yield takeLatest('FETCH_WATCHLIST', fetchWatchlist);
    yield takeLatest('REMOVE_WL_PLAYER', removeWatchlistPlayer);
}

export default myWatchlistSaga;