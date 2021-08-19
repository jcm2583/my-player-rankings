import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';
import ConsensusRankings from '../ConsensusRankings/ConsensusRankings';
import MyRankings from '../MyRankings/MyRankings';
import MyQbRankings from '../MyQbRankings/MyQbRankings';
import MyRbRankings from '../MyRbRankings/MyRbRankings';
import MyWrRankings from '../MyWrRankings/MyWrRankings';
import MyTeRankings from '../MyTeRankings/MyTeRankings';
import MySleepers from '../MySleepers/MySleepers';
import TopPerformers from '../TopPerformers/TopPerformers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute> */}

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/homepage"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/my-rankings"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/home"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/home"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/homepage"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/my-rankings"
          >
            <LandingPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/consensus-rankings"
          >
            <ConsensusRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-rankings'
            >
            <MyRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-rankings/qb'
            >
            <MyQbRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-rankings/rb'
            >
            <MyRbRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-rankings/wr'
            >
            <MyWrRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-rankings/te'
            >
            <MyTeRankings />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/my-sleepers'
            >
            <MySleepers />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/top-performers'
            >
              <TopPerformers />
          </ProtectedRoute>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
