import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { selectMode } from '../actions'

export const DEPARTURES = 'departures';
export const ARRIVALS = 'arrivals';

class SearchContainer extends React.Component {
    state = {
        delayed: false,
    };

    toggleDelayed = () => this.setState((prevState) => ({delayed: !prevState.delayed}));

    changeMode = event => this.props.dispatch(selectMode(event.target.value));

    render() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <div className="aero-search-container">
                        <div>
                            <h2 className="aero-add-zero-margin">Параметры поиска</h2>
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
                                checked={this.state.delayed}
                                onChange={this.toggleDelayed}
                                value="delayed"
                                color="primary"
                            />
                            <label htmlFor="delayed">Задерживается</label>
                        </form>
                        <div className="aero-search-field-container">
                            <InputBase placeholder="Поиск по номеру рейса"
                                        className="aero-search-input-field"
                            />
                            <IconButton aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </div>

                    </div>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(SearchContainer);