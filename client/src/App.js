import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './layouts/Dashboard.js';
import Login from './layouts/Login';
import Register from './layouts/Register';
// import Applicant from './layouts/Applicant';
import AddResearchPapers from './layouts/AddResearchPapers.js'
// import AddEducation from './views/Faculty/AddEducation.js'
import AddEducation from './layouts/AddEducation'
import AddExperience from './layouts/AddExperience.js'
import CreateProfile from './layouts/CreateProfile.js'
import EditProfile from './layouts/EditProfile.js'
import Calendar from './layouts/Calendar.js'
// import Profile from './layouts/Profile.js'
 import Profile from './views/UserProfile/UserProfile'
import Profiles from './layouts/Profiles.js'


import store from './utils/store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadFaculty } from './actions/auth';

import FacultyPrivateRoute from './components/Routing/FacultyPrivateRoute';
// import ApplicantPrivateRoute from './components/Routing/ApplicantPrivateRoute';

import './assets/scss/App.scss';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadFaculty());
  }, [loadFaculty()]);

  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
          <FacultyPrivateRoute exact path='/dashboard' component={Dashboard} />
           
            {/* <FacultyPrivateRoute exact path='/dashboard' component={Faculty} /> */}
            {/* <ApplicantPrivateRoute path='/applicant' component={Applicant} /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
             {/* <Route  path="/admin" component={Admin}></Route> */}
             <Route exact path="/profiles" component={Profiles}></Route>
              <Route exact path="/profile/:id" component={Profile}></Route>
              
             
              <Route
                exact
                path="/create-profile"
                component={CreateProfile}
              ></Route>
              <Route
                exact
                path="/edit-profile"
                component={EditProfile}
              ></Route>
              <Route
                exact
                path="/add-research-papers"
                component={AddResearchPapers}
              ></Route>
              <Route
                exact
                path="/add-education"
                component={AddEducation}
              ></Route>
              <Route
                exact
                path="/add-experience"
                component={AddExperience}
              ></Route>
              <Route
                exact
                path="/calendar"
                component={Calendar}
              ></Route>
            <Redirect from='/' to='/login' />
          
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
