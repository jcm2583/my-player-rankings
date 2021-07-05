import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LogOutButton(props) {
  const dispatch = useDispatch();

  //define history
  const history = useHistory();
  //create a function that will log the user out and redirect them to landing page
  const logoutButton = () => {
    dispatch({type: 'LOGOUT'});
    history.push('/home')
  }
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      // onClick={() => dispatch({ type: 'LOGOUT' })}
      onClick={logoutButton}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
