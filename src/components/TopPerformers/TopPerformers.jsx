import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './TopPerformers.css';

function TopPerformers() {

    //define dispatch
    const dispatch = useDispatch();

    //bring in homepage data from reducer
    const players = useSelector(store => store.topPerformersReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_TOP_PERFORMERS',
        });
    }, []);

    const useStyles = makeStyles({
        root: {
            minWidth: 250,
            border: 'solid',
            borderColor: '#0069c0',
            borderRadius: 8,
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
        <div>
            <h2>Welcome to the Top Performers page!</h2>
            <h3 className="centerText">Below you can view some of the top fantasy performers of the 2020 season</h3>
            <h2 className="pageHeader">Top 5 fantasy finishers in 2020 by position (PPR)</h2>
            <Grid container spacing={4} className={classes.gridContainer}>
                {players.map((player, i) => {
                    return (
                        <Grid item lg={3} med={4} sm={6} key={i}>
                            <Card className={classes.root}>
                                <CardHeader
                                    className={classes.title}
                                    title={player.first_name + " " + player.last_name} />
                                <CardMedia
                                    className={classes.image}
                                    image={player.image_url} />
                                <CardContent className={classes.text}>
                                    <Typography>{player.finish}</Typography>
                                    <Typography>{player.total_points} pts</Typography>
                                    <Typography>{player.avg_pts} pts per game</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default TopPerformers;