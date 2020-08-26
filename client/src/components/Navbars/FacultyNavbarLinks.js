import React, { Fragment , useEffect} from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
// import Profile from "../../views/UserProfile/Profile.js"
import { getCurrentFaculty } from "../../actions/profile";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FacultyNavbarLinks = ({ logout, getCurrentFaculty , profile: {profile} }) => {
    useEffect(() => {
        getCurrentFaculty();
        
      }, [getCurrentFaculty]);
  return (
    <Fragment>
      <AppBar position="static" style={{ background: "transparent" }}>
        <Toolbar>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button href="/dashboard">Dashboard</Button>
            {/* <Button href={`/profile/${profile.faculty._id}`}>Profile</Button> */}
            <Button
              aria-label="Logout"
            //   className={classes.buttonLink}
              onClick={logout}
              href="/"
            >
              Logout
            </Button>
          </ButtonGroup>
          {/* <Typography variant='h6' className='navbar-title'>
            <Link to='/' className='text-decoration-none'>
              CMS
            </Link>
          </Typography> */}
          {/* <Button color='primary' className='text-bold' variant=''>
            <Link to='/login' className='text-decoration-none'>
              Faculty Login
            </Link>
          </Button>
          {/* <Button color='inherit' className='text-bold'>
            <Link to='/login/applicant' className='text-decoration-none'>
              Applicant Login
            </Link>
          </Button> */}
          {/* <Button color='inherit' className='text-bold'>
            <Link to='/register' className='text-decoration-none'>
              Faculty Register
            </Link>
          </Button> */}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

FacultyNavbarLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentFaculty: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, getCurrentFaculty })(
  FacultyNavbarLinks
);
