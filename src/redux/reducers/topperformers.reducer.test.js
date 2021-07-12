import topPerformersReducer from './topperformers.reducer';

describe ('TOP PERFORMERS REDUCER TEST', () => {
    test('SET_TOP_PERFORMERS', () => {
        const action = {
            type: 'SET_TOP_PERFORMERS', 
            payload: {
                player: 'Pat Mahomes'
            }
        }
        const state = [];
        expect(topPerformersReducer(state, action)).toEqual({player: 'Pat Mahomes'})
    })
    
})