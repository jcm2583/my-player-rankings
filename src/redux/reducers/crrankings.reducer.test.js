import crPlayerReducer from "./crrankings.reducer";

describe ('MY CR PLAYERS REDUCER TEST', () => {
    test('SET_CR_PLAYERS', () => {
        const action = {
            type: 'SET_CR_PLAYERS', 
            payload: {
                player: 'Saquon Barkley'
            }
        }
        const state = [];
        expect(crPlayerReducer(state, action)).toEqual({player: 'Saquon Barkley'})
    })
    
})