//create a reducer to store players for my watchlist
const mySleepersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_SLEEPERS' :
            return action.payload
        default: return state;
    }
}

export default mySleepersReducer;