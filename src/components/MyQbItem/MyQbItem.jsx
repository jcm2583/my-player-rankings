import { TableCell, TableRow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

function MyQbItem ({player}) {

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
                        payload: {player, pos: 'qb'}
                    });
                  Swal.fire(
                    'Removed!',
                    'The selected player has been removed.',
                    'success'
                  )
                }
              });
        }
    
        //create a function that will send an increase player rank request to the saga
        const increaseQbRank = (player) => {
            console.log('increase button clicked', player);
            dispatch({
                type: 'INCREASE_QB_RANK',
                payload: {player, direction: 'down'}
            })
        }
    
        //create a function that will send an decrease the player rank request to the saga
        const decreaseQbRank = (player) => {
            console.log('decrease button clicked', player);
            dispatch({
                type: 'DECREASE_QB_RANK',
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
        <TableCell>{player?.position}{player?.position_rank}</TableCell>
        <TableCell><Button startIcon={<KeyboardArrowUpIcon />} onClick={() => increaseQbRank(player)}></Button></TableCell>
        <TableCell><Button startIcon={<KeyboardArrowDownIcon />}onClick={() => decreaseQbRank(player)}></Button></TableCell>
        <TableCell><button onClick={() => removePlayer(player)}>REMOVE</button></TableCell>
    </TableRow>
)
    
}

export default MyQbItem;