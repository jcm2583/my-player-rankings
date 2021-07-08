import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import './MyRankingsCrTable.css';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'; 
import React from 'react';
import MyRankingsCrItem from '../MyRankingsCrItem/MyRankingsCrItem';

function MyRankingsCrTable () {

    //declare dispatch
    const dispatch = useDispatch();
    //bring in consensus rankings player list from store
    const players = useSelector(store => store.crPlayerReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'all'
        });
    }, []);


    const fetchAll = () => {
        //dispatch to collect data on all players
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'all'
        })
    }

    const fetchQb = () => {
        //dispatch to collect qb data
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'qb'
        })
    }

    const fetchRb = () => {
        //dispatch to collect rb data
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'rb'
        })
    }

    const fetchWr = () => {
        //dispatch to collect wr data
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'wr'
        })
    }

    const fetchTe = () => {
        //dispatch to collect te data
        dispatch({
            type: 'FETCH_CR_PLAYERS',
            payload: 'te'
        })
    }

        //define table parameters
        const useStyles = makeStyles({
            root: {
                flexGrow: 1,
                maxWidth: 950,
                borderRadius: 12,
                marginTop: '32px',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            table: {
                minWidth: 900,
                margin: "0, auto",
            },
            tableContainer: {
                borderRadius: 24,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '16px',
                maxWidth: 950
            },
            tableHeaderCell: {
                fontWeight: 'bold'
            }
        })
    
        const classes = useStyles();

        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
          };
    
    return ( 
    <div>
        <div className="centerTable">
            <h2>Dynasty: Consensus Ranked Players</h2>
            <Paper className={classes.root}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label="All" onClick={fetchAll} />
                <Tab label="QB" onClick={fetchQb} />
                <Tab label="RB" onClick={fetchRb} />
                <Tab label="WR" onClick={fetchWr} />
                <Tab label="TE" onClick={fetchTe} />
            </Tabs>
            </Paper>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Overall Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Player Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Position</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Team</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Position Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map ((player, i) => {
                        return <MyRankingsCrItem key={i} player={player} />
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
    )
}

export default MyRankingsCrTable;