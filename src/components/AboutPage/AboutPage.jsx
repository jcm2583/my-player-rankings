import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2 className="header-spacing">Technologies used in creating this application include:</h2>

        <ul className="center">
          <li>React.js</li>
          <li>React Redux</li>
          <li>JavaScript</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
        </ul>

      </div>
    </div>
  );
}

export default AboutPage;
