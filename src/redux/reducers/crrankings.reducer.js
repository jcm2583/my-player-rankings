

//create a reducer to store Consensus Ranked players
const crPlayerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CR_PLAYERS' :
            return action.payload;
        default: return state;
    }
}

export default crPlayerReducer;