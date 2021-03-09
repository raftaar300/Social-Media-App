import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import Login from './components/login/login.js'
import { useHistory, BrowserRouter as Router, Link, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.js'
const App3 = () => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const active = useSelector(state => state.Login.active);
  useEffect(() => {

  })

  return (
    <>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Login/>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
    

 </> );
};

export default App3;
