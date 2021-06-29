function ConsensusListItem ({player}) {

    return (
        <tr>
            <td>{player.overall_rank}</td>
            <td>{player.first_name} {player.last_name}</td>
            <td>{player.number}</td>
            <td>{player.team}</td>
            <td>{player.position_rank}</td>
            <td><a href={player.stats_url} target="_blank">{player.stats_url}</a></td>
        </tr>
    )
}

export default ConsensusListItem;