import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, CardMedia, Typography, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';

function MySleeperItem ({player}) {

    //define dispatch
    const dispatch = useDispatch();

    //create a function that removes selected player
    const removePlayer = (player) => {
        //alert user to confirm removal of player
        Swal.fire({
            title: 'Remove Player',
            text: "Are you sure you want to remove player?",
            icon: 'warning',
            iconColor: '#f37e21',
            showCancelButton: true,
            confirmButtonColor: '#2196f3',
            cancelButtonColor: '#f37e21',
            confirmButtonText: 'Yes, remove player!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'REMOVE_SLEEPER_PLAYER',
                    payload: player 
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

    const viewNotes = (player) => {
      console.log(player);
      Swal.fire({
        title: 'Notes:',
        text: player.notes,
        background: '#fafafa',
        confirmButtonColor: '#2196f3',
      })
    }

    const useStyles = makeStyles({
      root: {
          minWidth: 250,
          marginTop: 32,
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
            <Typography>{player.position + ", " + player.team}</Typography>
            <Button
              variant="contained"
              style={{backgroundColor: '#2196f3', marginTop: 8}}
              onClick={() => viewNotes(player)}>View Notes</Button>
              <Button
              variant="contained"
              style={{backgroundColor: '#f37e21', marginTop: 8}}
              startIcon={<DeleteIcon />}
              onClick={() => removePlayer(player)}>Remove Player</Button>
            </CardContent>
            </Card>
        </Grid>
    )
}

export default MySleeperItem;