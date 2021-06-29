import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import ConsensusListItem from '../ConsensusListItem/ConsensusListItem';
import './ConsensusRankings.css';

function ConsensusRankings () {

    //declare dispatch
    const dispatch = useDispatch();
    //bring in consensus rankings player list from store
    const players = useSelector(store => store.crPlayerReducer)
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_CR_PLAYERS'
        });
    }, []);

    return ( 
    <div>
        <div>
            <h2>Consensus Ranked Players:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Number</th>
                        <th>Team</th>
                        <th>Position Rank</th>
                        <th>Player Page</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map ((player, i) => {
                        return <ConsensusListItem key={i} player={player} />
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ConsensusRankings;