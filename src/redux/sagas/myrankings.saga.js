import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//define addPlayer function to post data to database
function* addPlayer (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/my-rankings', action.payload);
        //will need to add a yield put here to rerender my players
    } catch (err) {
        console.log('Error in add player function', err);
    }
}


// create a saga that will
function* addPlayerSaga () {
    yield takeLatest('ADD_PLAYER', addPlayer);
}

export default addPlayerSaga;