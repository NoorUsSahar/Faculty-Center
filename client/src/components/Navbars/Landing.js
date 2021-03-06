import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' className='navbar-title'>
            <Link to='/' className='text-decoration-none'>
              CMS
            </Link>
          </Typography>
          <Button color='inherit' className='text-bold'>
            <Link to='/login' className='text-decoration-none'>
              Faculty Login
            </Link>
          </Button>
          {/* <Button color='inherit' className='text-bold'>
            <Link to='/login/applicant' className='text-decoration-none'>
              Applicant Login
            </Link>
          </Button> */}
          <Button color='inherit' className='text-bold'>
            <Link to='/register' className='text-decoration-none'>
              Faculty Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default LandingNavbar;
