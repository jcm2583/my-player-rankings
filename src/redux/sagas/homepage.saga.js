import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//create a function that will request the homepage data from the server
function* fetchHomepage () {
    try {
        const response = yield axios.get('/api/homepage');
        yield put({type: 'SET_HOMEPAGE', payload: response.data})
    } catch (err) {
        console.log('There was an error in the get homepage saga', err);
    }
}

//create a saga listener
function* homepageSaga () {
    yield takeLatest('FETCH_HOMEPAGE', fetchHomepage)
}

export default homepageSaga;