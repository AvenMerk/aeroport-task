import React from 'react';
import Departure from '../components/departure';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {fetchFlights} from "../actions";
import Arrival from '../components/arrival'

class FlightTable extends React.Component {

    componentDidMount() {
        console.log('did mount');
        const { dispatch, selectedMode } = this.props;
        dispatch(fetchFlights(selectedMode))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedMode !== this.props.selectedMode) {
            console.log('did update');
            const { dispatch, selectedMode } = this.props;
            dispatch(fetchFlights(selectedMode))
        }
    }

    render() {
        return <React.Fragment>
            <Grid item xs={9}>
                <div className="aero-table-block">
                    <div className="aero-flex aero-add-zero-margin">
                        <Grid item xs={3}><p className="aero-centred">Код аэропорта</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Время</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Номер рейса</p></Grid>
                        <Grid item xs={3}><p className="aero-centred">Статус</p></Grid>
                    </div>
                </div>

                <div>
                    {this.props.flightData.map((data, index) =>
                        <div key={index}>
                            {this.props.selectedMode === 'departures' ?
                                <Departure data={data} /> :
                                <Arrival data={data}/>
                            }

                        </div>
                    )}
                </div>
            </Grid>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    const { selectedMode, flightsForMode } = state;
    return {
        selectedMode,
        ...flightsForMode,
    }
};

export default connect(mapStateToProps)(FlightTable);