import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const Faculty = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email , password);
  };

  if (isAuthenticated ) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
 
      <Container className='container-primary'>
        <Paper elevation={4} className='paper-primary'>
          <Grid container>
            <Grid
              xs={12}
              sm={12}
              md={12}
              item
              className='text-center-horizontal'
            >
              <Typography
                align='center'
                className='title-secondary'
                color='primary'
              >
                Faculty Login
              </Typography>
              <div className='description-secondary text-center'>
                Please sign in
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12} item>
              <form className='form' onSubmit={(e) => onSubmit(e)}>
                <TextField
                  className='form-control'
                  label='Email'
                  variant='outlined'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required={true}
                />
                <TextField
                  className='form-control'
                  label='Password'
                  variant='outlined'
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  required={true}
                />
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  type='submit'
                  className='form-control'
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

Faculty.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Faculty);
