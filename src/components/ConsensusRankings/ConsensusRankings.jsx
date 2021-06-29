import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function ConsensusRankings () {

    //declare dispatch
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_CR_PLAYERS'
        })
    }, []);

    return ( 
    <div>
        <p>Hello from the CR page</p>
    </div>
    )
}

export default ConsensusRankings;