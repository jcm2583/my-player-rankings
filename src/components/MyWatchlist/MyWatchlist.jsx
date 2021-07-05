import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyWatchlistItem from '../MyWatchlistItem/MyWatchlistItem';

function MyWatchlist () {

    //declare dispatch
    const dispatch = useDispatch();

    //bring in players from my watchlist reducer
    const players = useSelector(store => store.myWatchlistReducer);
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_WATCHLIST',
        });
    }, []);

    //declare local states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPostion] = useState('');
    const [team, setTeam] = useState('');
    const [notes, setNotes] = useState('');
    const [image, setImage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        
        //create object to send
        let playerObject = {
            first_name: firstName,
            last_name: lastName,
            position: position,
            team: team,
            notes: notes,
            image_url: image
        }

        dispatch({
            type: 'ADD_TO_WATCHLIST',
            payload: playerObject
        });

        //clear inputs
        setFirstName('');
        setLastName('');
        setPostion('');
        setTeam('');
        setNotes('');
        setImage('');
    }

    const useStyles = makeStyles({
        root: {
            minWidth: 250,
        },
        gridContainer: {
            paddingLeft: "80px",
            paddingRight: "80px",
            flexWrap: "wrap",
        },
        image: {
            height: 0,
            paddingTop: "100%"
        },
        text: {
            textAlign: "center",
        },
        title: {
            textAlign: "center",
        }

    });

    const classes = useStyles();
    
    return (
        
    <div>   
        <div>
            <Grid container spacing={12} className={classes.gridContainer}>
            <form onSubmit={handleSubmit}>

                <Grid item lg={3} med={4} sm={6}>
                <TextField 
                type="text" 
                label="First Name" 
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}/>
                

                <TextField 
                type="text" 
                label="Last Name"
                value={lastName} 
                onChange={(evt) => setLastName(evt.target.value)} />

                <Select 
                value={position}
                displayEmpty 
                onChange={(evt) => setPostion(evt.target.value)}>
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
                onChange={(evt) => setTeam(evt.target.value)}/>

                <TextField 
                type="text" 
                label="Notes"
                multiline 
                value={notes}
                onChange={(evt) => setNotes(evt.target.value)}/>

                <TextField 
                type="text" 
                label="Image URL" 
                value={image}
                onChange={(evt) => setImage(evt.target.value)}/>

                <Button
                variant="contained"
                color="primary" 
                type="submit">Add Player</Button>
                </Grid>

            </form>
            </Grid>
        </div>

        <Grid container spacing={4} className={classes.gridContainer}>
            {players.map ((player, i) => {
                return <MyWatchlistItem key={i} player={player}/>
            })}
        </Grid>

    </div>
    )
}

export default MyWatchlist;