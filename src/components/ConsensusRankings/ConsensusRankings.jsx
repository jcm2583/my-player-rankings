import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import ConsensusListItem from '../ConsensusListItem/ConsensusListItem';
import './ConsensusRankings.css';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'; 


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

    return ( 
    <div>
        <div className="centerTable">
            <h2>Dynasty: Consensus Ranked Players</h2>
            {/* <link rel="stylesheet" href="" /> */}
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Overall Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Player Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Team</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Position Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map ((player, i) => {
                        return <ConsensusListItem key={i} player={player} />
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
    )
}

export default ConsensusRankings;