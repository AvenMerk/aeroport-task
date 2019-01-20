import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dateFormat from 'dateformat';

const Departure = ({ data }) => {
    const {Arrival, Departure, MarketingCarrier} = data;
    const date = dateFormat(Departure.ScheduledTimeLocal.DateTime, 'HH:MM');
    return (
        <Paper className="aero-flex">
            <Grid item xs={3}><p className="aero-centred">{Departure.AirportCode} => {Arrival.AirportCode}</p></Grid>
            <Grid item xs={3}><p className="aero-centred">{date}</p></Grid>
            <Grid item xs={3}><p className="aero-centred">{MarketingCarrier.AirlineID} {MarketingCarrier.FlightNumber}</p></Grid>
            <Grid item xs={3}><p className="aero-centred">{Departure.TimeStatus.Definition}</p></Grid>
        </Paper>
    )
};

export default Departure;
