import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function MyWatchlist () {

    
    //declare dispatch
    const dispatch = useDispatch();

    //declare local states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPostion] = useState('');
    const [team, setTeam] = useState('');
    const [notes, setNotes] = useState('');
    const [image, setImage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        
        //create object to send
        let playerObject = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            team: team,
            notes: notes,
            image: image
        }

        dispatch({
            type: 'ADD_TO_WATCHLIST',
            payload: playerObject
        });

        //clear inputs
        setFirstName('');
        setLastName('');
        setPostion('');
        setTeam('');
        setNotes('');
        setImage('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}/>

                <input 
                type="text" 
                placeholder="Last Name"
                value={lastName} 
                onChange={(evt) => setLastName(evt.target.value)} />

                <select name="" id="" value={position} onChange={(evt) => setPostion(evt.target.value)}>
                    <option value="" disabled>Position</option>
                    <option value="QB">QB</option>
                    <option value="RB">RB</option>
                    <option value="WR">WR</option>
                    <option value="TE">TE</option>
                </select>

                <input 
                type="text" 
                placeholder="Team"
                value={team}
                onChange={(evt) => setTeam(evt.target.value)}/>

                <input 
                type="text" 
                placeholder="Notes" 
                value={notes}
                onChange={(evt) => setNotes(evt.target.value)}/>

                <input 
                type="text" 
                placeholder="Image URL" 
                value={image}
                onChange={(evt) => setImage(evt.target.value)}/>
                
                <button type="submit">Add Player</button>
            </form>
        </div>
    )

}

export default MyWatchlist;