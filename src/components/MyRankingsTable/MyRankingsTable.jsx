import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';
import MyRankingsItem from '../MyRankingsItem/MyRankingsItem';
import './MyRankingsTable.css';

function MyRankingsTable () {

    //declare history
    const history = useHistory();
    //bring in player data from reducer
    const players = useSelector(store => store.myPlayerReducer)

    //define dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'all'
        });
    }, []);

    const fetchAll = () => {
        //dispatch to collect data on all players
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'all'
        })
    }

    const fetchQb = () => {
        //dispatch to collect qb data
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'qb'
        })
        history.push('/my-rankings/qb')
    }

    const fetchRb = () => {
        //dispatch to collect rb data
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'rb'
        })
        history.push('/my-rankings/rb')
    }

    const fetchWr = () => {
        //dispatch to collect wr data
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'wr'
        })
        history.push('/my-rankings/wr')
    }

    const fetchTe = () => {
        //dispatch to collect te data
        dispatch({
            type: 'FETCH_MY_PLAYERS',
            payload: 'te'
        })
        history.push('/my-rankings/te')
    }

    //define table parameters
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            margin: "0, auto"
        },
        tableContainer: {
            borderRadius: 25,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '32px',
            maxWidth: 950
        },
        tableHeaderCell: {
            fontWeight: 'bold',
            backgroundColor: '#2196f3',
            color: '#000000',
        }
        })
    
    const classes = useStyles();

    return (
    <div>
            
        <div className="centerTable">
            <h2>My Player Rankings</h2>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={fetchAll}>ALL</Button>
                    <Button onClick={fetchQb}>QB</Button>
                    <Button onClick={fetchRb}>RB</Button>
                    <Button onClick={fetchWr}>WR</Button> 
                    <Button onClick={fetchTe}>TE</Button>
            </ButtonGroup>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor: "#f37e21", fontWeight: 'bold'}}>Overall Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Player Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Position</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Team</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Position Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Increase Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Decrease Rank</TableCell>
                        <TableCell style={{backgroundColor: "#f37e21"}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map ((player, i) => {
                        return <MyRankingsItem key={i} player={player} />
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    
    </div>
    )
}

export default MyRankingsTable;