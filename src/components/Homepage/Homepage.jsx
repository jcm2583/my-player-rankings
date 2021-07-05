import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Homepage.css';

function Homepage () {
    
    //define dispatch
    const dispatch = useDispatch();
    //bring in homepage data from reducer
    const players = useSelector(store => store.homepageReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_HOMEPAGE',
        });
    }, []);

    const useStyles = makeStyles({
        root: {
          minWidth: 250,
        },
        gridContainer: {
            paddingLeft: "80px",
            paddingRight: "80px"
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
        <div>
            <h2 className="pageHeader">Top fantasy finishers in 2020 by position (PPR)</h2>
                <Grid container spacing={6} className={classes.gridContainer} justify="center">
                {players.map ((player, i) => {
                    return (
                        
                        <Grid item lg={2} med={4} sm={6} key={i}>
                        <Card className={classes.root}>
                            <CardHeader 
                            className={classes.title} 
                            title={player.first_name + " " + player.last_name}/>
                            <CardMedia 
                            className={classes.image} 
                            image={player.image_url} />
                            <CardContent className={classes.text}>
                            <Typography>{player.finish}</Typography>
                            <Typography>{player.total_points} pts</Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                
                    )
                })}
                </Grid>
        </div>
    )
}

export default Homepage; 