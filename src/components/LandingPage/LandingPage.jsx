import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/registration');
  };

  return (
    <div>
      <h2 className="centerText">Welcome to My Player Rankings</h2>

      <div className="grid">
        <div className="centerText">
          <p>
            A web application designed to assist your fantasy football opinions.
          </p>
        </div>
        <div>
        <LoginForm />
          <center>
            <h4>Don't Have An Account?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Create Account
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
