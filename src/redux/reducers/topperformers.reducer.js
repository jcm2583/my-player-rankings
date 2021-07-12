//create a reducer to store the homepage data
const topPerformersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOP_PERFORMERS' :
            return action.payload
        default :
            return state;
    }
}

export default topPerformersReducer;