import { TableCell, TableRow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 

function MyRankingsItem({ player }) {


    //declare dispatch
    const dispatch = useDispatch();

    //create a function that will delete a player on click
    const removePlayer = (player) => {
        console.log(player);
        dispatch({
            type: 'REMOVE_PLAYER',
            payload: player
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
            <TableCell><button onClick={() => removePlayer(player)}>REMOVE</button></TableCell>
        </TableRow>
    )
}

export default MyRankingsItem;