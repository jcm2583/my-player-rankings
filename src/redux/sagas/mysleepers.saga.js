import axios from "axios";
import { put } from "redux-saga/effects";

const { takeLatest } = require("@redux-saga/core/effects");

//create a functin that will send the player to the server
function* addToMySleepers (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/my-sleepers', action.payload)
        //re-render with added player
        yield put({type: 'FETCH_MY_SLEEPERS'});
    } catch (err) {
        console.log('There was an error in the add to watchlist saga', err);
    }
}

//create a function that will retrieve my-watchlist from the server
function* fetchMySleepers () {
    try {
        const response = yield axios.get('/api/my-sleepers')
        console.log(response.data);
        //send data to a reducer
        yield put({type: 'SET_MY_SLEEPERS', payload: response.data})
    } catch (err) {
        console.log('There was an error in the fetch watchlist saga', err);
    }
}

//create a function to send player to be deleted from server
function* removeSleeperPlayer (action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/my-sleepers/${action.payload.id}`)
        //need to re-render with updated list
        yield put({type: 'FETCH_MY_SLEEPERS'});
    } catch (err) {
        console.log('There was an error in the delete watchlist', err);
    }
}

function* mySleepersSaga () {
    yield takeLatest('ADD_TO_MY_SLEEPERS', addToMySleepers);
    yield takeLatest('FETCH_MY_SLEEPERS', fetchMySleepers);
    yield takeLatest('REMOVE_SLEEPER_PLAYER', removeSleeperPlayer);
}

export default mySleepersSaga;