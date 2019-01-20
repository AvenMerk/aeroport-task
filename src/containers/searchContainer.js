import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { selectMode, selectDelayed, searchFlight } from '../actions';

export const DEPARTURES = 'departures';
export const ARRIVALS = 'arrivals';

class SearchContainer extends React.Component {

    toggleDelayed = () => this.props.dispatch(selectDelayed(!this.props.selectedDelayed));

    changeMode = event => this.props.dispatch(selectMode(event.target.value));

    searchingFlight = event => this.props.dispatch(searchFlight(event.target.value))

    render() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <div className="aero-search-container aero-full-height">
                        <div className="aero-tab">
                            <div>
                                <p className="aero-add-zero-margin aero-centred">Фильтр</p>
                            </div>
                            <form className="aero-radio-container">
                                <Radio
                                    checked={this.props.selectedMode === ARRIVALS}
                                    onChange={this.changeMode}
                                    value={ARRIVALS}
                                    name="radio-button-demo"
                                    color="primary"
                                />
                                <label>Прибытие</label><br />
                                <Radio
                                    checked={this.props.selectedMode === DEPARTURES}
                                    onChange={this.changeMode}
                                    value={DEPARTURES}
                                    name="radio-button-demo"
                                    color="primary"
                                />
                                <label>Вылет</label><br />
                                <Switch
                                    checked={this.props.selectedDelayed}
                                    onChange={this.toggleDelayed}
                                    value="delayed"
                                    color="primary"
                                />
                                <label>Задерживается</label>
                            </form>
                            <div className="aero-search-field-container">
                                <InputBase placeholder="Поиск по номеру рейса"
                                           className="aero-search-input-field"
                                           onChange={this.searchingFlight}
                                />
                                <IconButton aria-label="Search">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { selectedMode, selectedDelayed, searchedFlight } = state;
    return {
        selectedMode,
        selectedDelayed,
        searchedFlight,
    };
};

export default connect(mapStateToProps)(SearchContainer);