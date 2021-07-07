import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'; 
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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


    return (
    <div>
            
        <div className="centerTable">
            <h2>My Player Rankings</h2>
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
                        <TableCell>Increase Rank</TableCell>
                        <TableCell>Decrease Rank</TableCell>
                        <TableCell></TableCell>
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