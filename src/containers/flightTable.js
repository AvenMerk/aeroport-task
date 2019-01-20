import React from 'react';
import Departure from '../components/departure';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {fetchFlights} from "../actions";
import Arrival from '../components/arrival'
import {DEPARTURES} from "./searchContainer";

class FlightTable extends React.Component {

    componentDidMount() {
        const { dispatch, selectedMode } = this.props;
        dispatch(fetchFlights(selectedMode))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedMode !== this.props.selectedMode) {
            const { dispatch, selectedMode } = this.props;
            dispatch(fetchFlights(selectedMode))
        }
    }

    mapFlightMode = (data, index) => {
        switch (this.props.selectedMode) {
            case DEPARTURES:
                return (
                    <div key={index}>
                        <Departure data={data}/>
                    </div>
                );
            default:
                return (
                    <div key={index}>
                        <Arrival data={data}/>
                    </div>
                );
        }
    };

    filterDelayed = (data) => {
        //если selectedDelayed === false, то фильтровать нечего
        if (this.props.selectedDelayed === false) {
            return true;
        }
        switch (this.props.selectedMode) {
            case DEPARTURES:
                return data.Departure.TimeStatus.Code === 'DL';
            default:
                return data.Arrival.TimeStatus.Code === 'DL';
        }
    };

    filterByFlightNumber = (data) => {
        if (this.props.searchedFlight === "") {
            return true;
        }
        const { AirlineID, FlightNumber} = data.MarketingCarrier;
        return `${AirlineID} ${FlightNumber}`.includes(this.props.searchedFlight);
    };

    getFlightData = () =>  this.props.flightData
        .filter(this.filterDelayed)
        .filter(this.filterByFlightNumber)
        .map(this.mapFlightMode);


    render() {
        return <React.Fragment>
            <Grid item xs={9}>
                <div className="aero-table-block">
                    <div className="aero-flex aero-add-zero-margin">
                        <Grid item xs={3}><p className="aero-centred">Время</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Город</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Номер рейса</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Статус</p></Grid>
                    </div>
                </div>

                <div>
                    {this.getFlightData()}
                </div>
            </Grid>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    const { selectedMode, selectedDelayed, flightsForMode, searchedFlight } = state;
    return {
        selectedMode,
        selectedDelayed,
        ...flightsForMode,
        searchedFlight,
    }
};

export default connect(mapStateToProps)(FlightTable);