import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import './MyRankingsCrTable.css';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'; 
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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
            maxWidth: 950
        },
        tableHeaderCell: {
            fontWeight: 'bold'
        }
    })

    const classes = useStyles();

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
    

    return ( 
    <div>
        <div className="centerTable">
            <h2>Dynasty: Consensus Ranked Players</h2>
            <Breadcrumbs className="breadcrumbs">
            <Link color="inherit" onClick={fetchAll}>All</Link>
            <Link color="inherit" onClick={fetchQb}>QB</Link>
            <Link color="inherit" onClick={fetchRb}>RB</Link>
            <Link color="inherit" onClick={fetchWr}>WR</Link>
            <Link color="inherit" onClick={fetchTe}>TE</Link>
            </Breadcrumbs>
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