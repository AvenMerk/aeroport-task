import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Flight = ({ data }) => {
    const {Arrival, Departure, MarketingCarrier} = data;
    return (
        <Paper className="aero-flex">
            <Grid item xs={3}><p className="aero-centred">{Arrival.AirportCode} => {Departure.AirportCode}</p></Grid>
            <Grid item xs={3}><p className="aero-centred">time</p></Grid>
            <Grid item xs={3}><p className="aero-centred">{MarketingCarrier.AirlineID} {MarketingCarrier.FlightNumber}</p></Grid>
            <Grid item xs={3}><p className="aero-centred">{Arrival.TimeStatus.Definition}</p></Grid>
        </Paper>
    )
};

export default Flight;
