import { TableCell, TableRow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Swal from 'sweetalert2';

function MyWrItem ({player}) {

    const dispatch = useDispatch();
        //create a function that will send a delete player request to the saga
        const removePlayer = (player) => {
            //alert user to confirm that they want to delete selected player
            Swal.fire({
                title: 'Remove Player',
                text: "Are you sure you want to remove player?",
                icon: 'warning',
                iconColor: '#f37e21',
                showCancelButton: true,
                background: '#fafafa',
                confirmButtonColor: '#2196f3',
                cancelButtonColor: '#f37e21',
                confirmButtonText: 'Yes, remove player!'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch({
                        type: 'REMOVE_PLAYER',
                        payload: {player, pos: 'wr'}
                    });
                Swal.fire({  
                    title: 'Removed!',
                    text: 'The selected player has been removed.',
                    icon: 'success',
                    iconColor: '#f37e21',
                    background: '#c7c7c7',
                    confirmButtonColor: '#2196f3',
                })
                }
              });
        }
    
        //create a function that will send an increase player rank request to the saga
        const increaseWrRank = (player) => {
            console.log('increase button clicked', player);
            dispatch({
                type: 'INCREASE_WR_RANK',
                payload: {player, direction: 'down'}
            })
        }
    
        //create a function that will send an decrease the player rank request to the saga
        const decreaseWrRank = (player) => {
            console.log('decrease button clicked', player);
            dispatch({
                type: 'DECREASE_WR_RANK',
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
        <TableCell style={{color: "#f37e21", fontWeight: 'bold'}}>{player?.position} {player?.position_rank}</TableCell>
        <TableCell>
            <Button 
            startIcon={<KeyboardArrowUpIcon style={{color: "#2196f3", fontSize: 35}} />} 
            onClick={() => increaseWrRank(player)}>
            </Button>
        </TableCell>
        <TableCell>
            <Button 
            startIcon={<KeyboardArrowDownIcon style={{color: "#2196f3", fontSize: 35}} />}
            onClick={() => decreaseWrRank(player)}>
            </Button>
        </TableCell>
        <TableCell>
            <Button 
            onClick={() => removePlayer(player)}
            startIcon={<RemoveCircleOutlineIcon style={{color: "#f37e21", fontSize: 35}} />}>
            </Button>
        </TableCell>
    </TableRow>
)
    
}

export default MyWrItem;