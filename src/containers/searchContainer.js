import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

class SearchContainer extends React.Component {
    state = {
        //для свитч
        checkedA: true,
        checkedB: true,
        //для радио
        selectedValue: 'arrive',
    };

    handleChangeSwitch = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChangeRadio = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <div className="aero-search-container">
                        <div>
                            <h3>Параметры поиска</h3>
                        </div>
                        <form>
                            <Radio
                                checked={this.state.selectedValue === 'arrive'}
                                onChange={this.handleChangeRadio}
                                value="arrive"
                                name="radio-button-demo"
                                color="primary"
                                aria-label="A"
                            />
                            <label htmlFor="arrive">Прибытие</label><br />
                            <Radio
                                checked={this.state.selectedValue === 'departure'}
                                onChange={this.handleChangeRadio}
                                value="departure"
                                name="radio-button-demo"
                                color="primary"
                                aria-label="B"
                            />
                            <label htmlFor="departure">Вылет</label><br />
                            <Switch
                                checked={this.state.checkedA}
                                onChange={this.handleChangeSwitch('checkedA')}
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

export default SearchContainer;