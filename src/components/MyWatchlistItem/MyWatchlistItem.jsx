import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function MyWatchlistItem ({player}) {

    //define dispatch
    const dispatch = useDispatch();

    //create a function that removes selected player
    const removePlayer = (player) => {
        //alert user to confirm removal of player
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
                    type: 'REMOVE_WL_PLAYER',
                    payload: player 
                });
              Swal.fire(
                'Removed!',
                'The selected player has been removed.',
                'success'
              )
            }
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