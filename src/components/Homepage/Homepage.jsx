import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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

    return (
        <div>
            <h2>Top fantasy finishers in 2020 by position (PPR)</h2>
            <div>
                {players.map ((player, i) => {
                    return (
                        <div key={i}>
                            <h3>{player.first_name} {player.last_name}</h3>
                            <img src={player.image_url} width="500" height="600"/>
                            <h3>{player.finish}</h3>
                            <h4>{player.total_points} pts</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage; 