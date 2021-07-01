import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import ConsensusRankings from '../ConsensusRankings/ConsensusRankings';
import './MyRankings.css';
import MyRankingsTable from '../MyRankingsTable/MyRankingsTable';


function MyRankings () {
    
    //declare dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'all'
        });
    }, []);

    //will need local states for inputs
    const [overallRank, setOverallRank] = useState('');
    const [positionRank, setPositionRank] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [position, setPosition] = useState('');
    const [team, setTeam] = useState('');
    const [playerUrl, setPlayerUrl] = useState('');

    //create a function that will submit the player to the database
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //create a player object to send the data
        let playerObject = {
            overall_rank: overallRank,
            position_rank: positionRank,
            first_name: firstName,
            last_name: lastName,
            number: number,
            position: position,
            team: team,
            stats_url: playerUrl
        };
        //send object to saga
        dispatch({
            type: "ADD_PLAYER",
            payload: playerObject
        });
        //need to clear inputs
        setOverallRank('');
        setPositionRank('');
        setFirstName('');
        setLastName('');
        setNumber('');
        setPosition('');
        setTeam('');
        setPlayerUrl('');
    }

    return (
    <div> 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Overall Rank"
                value={overallRank}
                onChange={(evt) => setOverallRank(evt.target.value)} />
                
                <input 
                type="text" 
                placeholder="Position Rank"
                value={positionRank}
                onChange={(evt) => setPositionRank(evt.target.value)} />

                <input 
                type="text" 
                placeholder="First Name"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}/>

                <input 
                type="text" 
                placeholder="Last Name"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}/>

                <input 
                type="text" 
                placeholder="Number"
                value={number}
                onChange={(evt) => setNumber(evt.target.value)}/>

                <select name="position" id="position" value={position}
                onChange={(evt) => setPosition(evt.target.value)}>
                    <option value="" disabled>Position</option>
                    <option value="QB">QB</option>
                    <option value="RB">RB</option>
                    <option value="WR">WR</option>
                    <option value="TE">TE</option>
                </select>
                <input 
                type="text" 
                placeholder="Team"
                value={team}
                onChange={(evt) => setTeam(evt.target.value)} />

                <input 
                type="text" 
                placeholder="Player Page URL"
                value={playerUrl}
                onChange={(evt) => setPlayerUrl(evt.target.value)} />
                <button type="submit">Add Player</button>
            </form>
        </div>
        <div>
            <MyRankingsTable />
        </div>
        <div>
            <ConsensusRankings />
        </div>
    </div>
    )
}

export default MyRankings;