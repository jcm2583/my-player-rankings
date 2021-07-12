import {TableCell, TableRow, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function MyRankingsCrItem ({player}) {


    //declare dispatch
    const dispatch = useDispatch();

    //create a function that will send clicked on player to saga
    const addMyPlayer = (player) => {
        dispatch({
            type: 'ADD_PLAYER',
            payload: player,
        });
        //alert user that they player has been added
        Swal.fire({
            title: 'Player added!',
            background: '#fafafa',
            confirmButtonColor: '#2196f3',
        })
    }

    return (
        <TableRow>
            <TableCell>{player?.overall_rank}</TableCell>
            <TableCell><a href={player?.stats_url}
             target="_blank" 
             className="playerLink"
             >{player?.first_name} {player?.last_name}</a><Typography>#{player?.number}</Typography></TableCell>
            <TableCell>{player?.position}</TableCell>
            <TableCell>{player?.team}</TableCell>
            <TableCell>{player?.position}{player?.position_rank}</TableCell>
            <TableCell><Button
            startIcon={<AddCircleOutlineIcon style={{color: '#2196f3', fontSize: 35}}/>}
            onClick={() => addMyPlayer(player)}></Button></TableCell>
        </TableRow>
    )
}

export default MyRankingsCrItem;