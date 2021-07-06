import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, CardMedia, Typography, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
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

    const viewNotes = (player) => {
      console.log(player);
      Swal.fire(
        'Notes:',
        `${player.notes}`,
      )
    }

    const useStyles = makeStyles({
      root: {
          minWidth: 250,
      },
      gridContainer: {
          paddingLeft: "80px",
          paddingRight: "80px",
          flexWrap: "wrap",
      },
      image: {
          height: 0,
          paddingTop: "100%"
      },
      text: {
          textAlign: "center",
      },
      title: {
          textAlign: "center",
      }

  });

  const classes = useStyles();

    return (
        <Grid item lg={3} med={4} sm={6}>
            <Card className={classes.root}>
            <CardHeader
              className={classes.title}
              title={player.first_name + " " + player.last_name} />
            <CardMedia
              className={classes.image}
              image={player.image_url} />
            <CardContent className={classes.text}>
            <Typography>{player.position}, {player.team}</Typography>
            {/* <Typography>Notes: {player.notes}</Typography> */}
            <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => removePlayer(player)}>Remove Player</Button>
            <Button
            variant="contained"
            color="primary"
            onClick={() => viewNotes(player)}>View Notes</Button>
            </CardContent>
            </Card>
        </Grid>
    )
}

export default MyWatchlistItem;