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
            <h2>Welcome to the My Rankings page!</h2>
            <h3 className="centerText">Use the Consensus Rankings table on the bottom of the page to add players!</h3>
            <h3 className="centerText">Or fill out the form below to add a player that you don't see on the Consensus Rankings table</h3>
            <h3 className="centerText">Once you have some players added to your table, start ranking them!</h3>
            
            <form onSubmit={handleSubmit}>
                <TextField 
                type="text" 
                label="First Name"
                required
                style={{marginLeft: 64, marginTop: 32}}
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}/>

                <TextField 
                type="text" 
                label="Last Name"
                required
                style={{marginLeft: 32, marginTop: 32}}
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}/>

                <TextField 
                type="number" 
                label="Number"
                required
                style={{marginLeft: 32, marginTop: 32, width: 88}}
                value={number}
                onChange={(evt) => setNumber(evt.target.value)}/>

                <Select
                value={position}
                style={{marginLeft: 32, marginTop: 48}}
                required
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
                style={{marginLeft: 32, marginTop: 32}}
                value={team}
                onChange={(evt) => setTeam(evt.target.value)} />

                <TextField
                type="number" 
                label="Overall Rank"
                required
                style={{marginLeft: 32, marginTop: 32, width: 116}}
                value={overallRank}
                onChange={(evt) => setOverallRank(evt.target.value)} />
                
                <TextField 
                type="number" 
                label="Position Rank"
                required
                style={{marginLeft: 32, marginTop: 32, width: 128}}
                value={positionRank}
                onChange={(evt) => setPositionRank(evt.target.value)} />

                <TextField 
                type="text" 
                label="Player Page URL"
                style={{marginLeft: 32, marginTop: 32}}
                value={playerUrl}
                onChange={(evt) => setPlayerUrl(evt.target.value)} />
                <Button 
                variant="contained"
                style={{backgroundColor: "#2196f3", fontFamily: `"Optima", sans-serif`, marginTop: 32, marginBottom: 64, marginLeft: 650}}
                type="submit" 
                startIcon={<AddCircleOutlineIcon />}>Add Player</Button>
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