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
        <h2>Technologies used in creating this application include:</h2>

        <ul className="center">
          <li>React.js</li>
          <li>React Redux</li>
          <li>JavaScript</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
        </ul>

        <h2 className="header-spacing">Toughest Challenge:</h2>

          <ul>
            <li className="center">One of the toughest challenges that I overcame was allowing the user to update the positional
            ranking instead of the overall ranking when organizing the table by position only.
            </li>
          </ul>

        <h2 className="header-spacing">Next Challenge:</h2>
          <ul>
            <li className="center">I would like to add drag and drop technology to the rankings table to allow the user to drag and drop their player rankings.
            </li>
          </ul>

        <h2 className="header-spacing">Shoutouts:</h2>

          <ul>
            <li className="center">Thank you to Prime Digital Academy for making this all possible. 
            The program has been everything that I hoped it would be and more.
            </li>
            <li className="list-spacing">I would also like to give a huge thank you to my instructor, Dane. He is an excellent
            teacher and really has a way with connecting with students and making sure that they are understanding the content. 
            </li>
            <li className="list-spacing">I would also like to give a huge thank you to my cohort. Everyone is always willing to help
            each other out and they have made this a very enjoyable experience.</li>
          </ul>

      </div>
    </div>
  );
}

export default AboutPage;
