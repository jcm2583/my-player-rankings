import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



//create a function to GET players for my players table
function* fetchMyPlayers (action) {
    console.log(action.payload);
    try {
        const response = yield axios.get(`/api/my-rankings/${action.payload}`)
        //send server data to reducer
        yield put({type: 'SET_MY_PLAYERS', payload: response.data})
    } catch (err) {
        console.log("Error in GET player saga", err);
    }
}

//define addPlayer function to post data to database
function* addPlayer (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/my-rankings', action.payload);
        //re-render with the added player
        yield put({type: 'FETCH_MY_PLAYERS', payload: 'all'});
    } catch (err) {
        console.log('Error in add player saga', err);
    }
}

//create a function that will delete a player from database
function* removePlayer (action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/my-rankings/${action.payload.id}`, action.payload)
        //re-render with deleted player
        yield put({type: 'FETCH_MY_PLAYERS', payload: 'all'});
    } catch (err) {
        console.log('Error in delete player sage', err);
    }
}


// create a saga that will
function* addPlayerSaga () {
    yield takeLatest('ADD_PLAYER', addPlayer);
    yield takeLatest('FETCH_MY_PLAYERS', fetchMyPlayers);
    yield takeLatest('REMOVE_PLAYER', removePlayer)
}

export default addPlayerSaga;