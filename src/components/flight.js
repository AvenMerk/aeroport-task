import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Flight = ({time, city, number, status}) => (
  <Paper className="aero-flex">
      <Grid item xs={3}><p className="aero-centred">{city}</p></Grid>
      <Grid item xs={3}><p className="aero-centred">{time}</p></Grid>
      <Grid item xs={3}><p className="aero-centred">{number}</p></Grid>
      <Grid item xs={3}><p className="aero-centred">{status}</p></Grid>
  </Paper>
);

export default Flight;