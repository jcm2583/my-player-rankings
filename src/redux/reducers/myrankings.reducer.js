//create a reducer to store my player data
const myPlayerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_PLAYERS' :
            return action.payload;
        default: return state;
    }
}

export default myPlayerReducer;