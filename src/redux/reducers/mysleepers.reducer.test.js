import mySleepersReducer from './mysleepers.reducer';

describe ('MY SLEEPERS REDUCER TEST', () => {
    test('SET_MY_SLEEPERS', () => {
        const action = {
            type: 'SET_MY_SLEEPERS', 
            payload: {
                player: 'Mecole Hardman'
            }
        }
        const state = [];
        expect(mySleepersReducer(state, action)).toEqual({player: 'Mecole Hardman'})
    })
    
})



