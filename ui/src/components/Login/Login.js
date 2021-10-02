import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToken from '../../hooks/useToken';
import { Box, Paper, Grid, Typography, TextField, Button } from '@mui/material';
import useStyles from './styles';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Login({ setToken }) {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className={classes.container}>
      <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid item md={4} xs={10}>
          <Paper sx={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1rem'
          }}>
            <Typography sx={{ fontWeight: 600, py: 2 }} variant={'h6'}>{'Log in'}</Typography>
            <TextField
              sx={{ width: '80%', py: 2 }}
              variant={'standard'}
              label={'Your email'}
            />
            <TextField
              sx={{ width: '80%', py: 2 }}
              variant={'standard'}
              label={'Your password'}
            />
            <Box sx={{ py: 3 }}>
              <Button
                sx={{
                  background: 'linear-gradient(45deg, #a659b6 30%, #7158b4 90%)',
                  color: 'white',
                  px: 2,
                  borderRadius: '0.5rem'
                }}
              >
                {'Log in'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )

}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;