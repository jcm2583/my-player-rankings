//create a reducer to store players for my watchlist
const myWatchlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WATCHLIST' :
            return action.payload
        default: return state;
    }
}

export default myWatchlistReducer;