//create a reducer to store the homepage data
const homepageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE' :
            return action.payload
        default :
            return state;
    }
}

export default homepageReducer;