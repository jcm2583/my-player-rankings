import { TableCell, TableRow, Typography } from '@material-ui/core';


function MyRankingsItem({ player }) {


    return (
        <TableRow>
            <TableCell>{player?.overall_rank}</TableCell>
            <TableCell><a href={player?.stats_url}
                target="_blank"
                className="playerLink"
            >{player?.first_name} {player?.last_name}</a><Typography>#{player?.number}</Typography></TableCell>
            <TableCell>{player?.team}</TableCell>
            <TableCell>{player?.position_rank}</TableCell>
        </TableRow>
    )
}

export default MyRankingsItem;