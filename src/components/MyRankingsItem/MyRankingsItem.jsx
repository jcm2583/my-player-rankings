import { TableCell, TableRow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function MyRankingsItem({ player }) {


    //declare dispatch
    const dispatch = useDispatch();

    //create a function that will send a delete player request to the saga
    const removePlayer = (player) => {
        //alert user to confirm that they want to delete selected player
        Swal.fire({
            title: 'Remove Player',
            text: "Are you sure you want to remove player?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove player!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'REMOVE_PLAYER',
                    payload: player
                })
              Swal.fire(
                'Removed!',
                'The selected player has been removed.',
                'success'
              )
            }
          });
    }

    //create a function that will send an increase player rank request to the saga
    const increaseRank = (player) => {
        console.log('increase button clicked', player);
        dispatch({
            type: 'INCREASE_ALL_RANK',
            payload: {player, direction: 'down'}
        })
    }

    //create a function that will send an decrease the player rank request to the saga
    const decreaseRank = (player) => {
        console.log('decrease button clicked', player);
        dispatch({
            type: 'DECREASE_ALL_RANK',
            payload: {player, direction: 'up'}
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
            <TableCell>{player?.position_rank}</TableCell>
            <TableCell><button onClick={() => increaseRank(player)}>up</button></TableCell>
            <TableCell><button onClick={() => decreaseRank(player)}>down</button></TableCell>
            <TableCell><button onClick={() => removePlayer(player)}>REMOVE</button></TableCell>
        </TableRow>
    )
}

export default MyRankingsItem;