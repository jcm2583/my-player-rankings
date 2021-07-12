import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//create a function that will request the homepage data from the server
function* fetchTopPerformers () {
    try {
        const response = yield axios.get('/api/top-performers');
        yield put({type: 'SET_TOP_PERFORMERS', payload: response.data})
    } catch (err) {
        console.log('There was an error in the get homepage saga', err);
    }
}

//create a saga listener
function* topPerformersSaga () {
    yield takeLatest('FETCH_TOP_PERFORMERS', fetchTopPerformers)
}

export default topPerformersSaga;