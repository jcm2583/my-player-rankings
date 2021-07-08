import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import MyRankingsCrTable from '../MyRankingsCrTable/MyRankingsCrTable';
import './MyRankings.css';
import MyRankingsTable from '../MyRankingsTable/MyRankingsTable';
import { Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



function MyRankings () {
    
    //declare dispatch
    const dispatch = useDispatch();

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
                <TextField 
                type="text" 
                label="First Name"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}/>

                <TextField 
                type="text" 
                label="Last Name"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}/>

                <TextField 
                type="text" 
                label="Number"
                value={number}
                onChange={(evt) => setNumber(evt.target.value)}/>

                <Select
                value={position}
                displayEmpty
                onChange={(evt) => setPosition(evt.target.value)}>
                    <MenuItem value="" disabled>Position</MenuItem>
                    <MenuItem value="QB">QB</MenuItem>
                    <MenuItem value="RB">RB</MenuItem>
                    <MenuItem value="WR">WR</MenuItem>
                    <MenuItem value="TE">TE</MenuItem>
                </Select>
                
                <TextField 
                type="text" 
                label="Team"
                value={team}
                onChange={(evt) => setTeam(evt.target.value)} />

                <TextField
                type="text" 
                label="Overall Rank"
                value={overallRank}
                onChange={(evt) => setOverallRank(evt.target.value)} />
                
                <TextField 
                type="text" 
                label="Position Rank"
                value={positionRank}
                onChange={(evt) => setPositionRank(evt.target.value)} />

                <TextField 
                type="text" 
                label="Player Page URL"
                value={playerUrl}
                onChange={(evt) => setPlayerUrl(evt.target.value)} />
                <Button type="submit" startIcon={<AddCircleOutlineIcon />}>Add Player</Button>
            </form>
        </div>
        <div>
            <MyRankingsTable />
        </div>
        <div>
            <MyRankingsCrTable />
        </div>
    </div>
    )
}

export default MyRankings;