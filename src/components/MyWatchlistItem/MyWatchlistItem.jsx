import { useDispatch } from 'react-redux';

function MyWatchlistItem ({player}) {

    //define dispatch
    const dispatch = useDispatch();

    //create a function that removes selected player
    const removePlayer = (player) => {
        dispatch({
            type: 'REMOVE_WL_PLAYER',
            payload: player 
        });
    }

    return (
        <div>
            <h3>{player.first_name} {player.last_name}</h3>
            <h4>{player.position}, {player.team}</h4>
            <img src={player.image_url} alt={player.first_name} />
            <p>{player.notes}</p>
            <button onClick={() => removePlayer(player)}>Remove Player</button>
        </div>
    )
}

export default MyWatchlistItem;