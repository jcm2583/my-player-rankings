import expectExport from "expect";
import myPlayerReducer from "./myrankings.reducer";

// test SET_ALL_MY_PLAYERS
// test SET_MY_QB
// test SET_MY_RB
// test SET_MY_WR
// test SET_MY_TE

describe('MY RANKINGS REDUCER TEST', () => {
    test('SET_ALL_MY_PLAYERS', () => {
        const action = {
            type: 'SET_ALL_MY_PLAYERS', 
            payload: {
                player: 'Pat Mahomes'
            }
        }
        const state = [];
        expect(myPlayerReducer(state, action)).toEqual({player: 'Pat Mahomes'})
    })

    test('SET_MY_QB', () => {
        const action = {
            type: 'SET_MY_QB', 
            payload: {
                player: 'Pat Mahomes'
            }
        }
        const state = [];
        expect(myPlayerReducer(state, action)).toEqual({player: 'Pat Mahomes'})
    })

    test('SET_MY_RB', () => {
        const action = {
            type: 'SET_MY_RB', 
            payload: {
                player: 'Saquon Barkley'
            }
        }
        const state = [];
        expect(myPlayerReducer(state, action)).toEqual({player: 'Saquon Barkley'})
    })

    test('SET_ALL_MY_PLAYERS', () => {
        const action = {
            type: 'SET_MY_WR', 
            payload: {
                player: 'Tyreek Hill'
            }
        }
        const state = [];
        expect(myPlayerReducer(state, action)).toEqual({player: 'Tyreek Hill'})
    })

    test('SET_ALL_MY_PLAYERS', () => {
        const action = {
            type: 'SET_MY_TE', 
            payload: {
                player: 'Travis Kelce'
            }
        }
        const state = [];
        expect(myPlayerReducer(state, action)).toEqual({player: 'Travis Kelce'})
    })
})