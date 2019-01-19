import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import FlightTable from './containers/flightTable';
import SearchContainer from './containers/searchContainer'

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Header />
            <div className="aero-flex-container">
                <FlightTable />
                <SearchContainer />
            </div>
        </React.Fragment>
    );
  }
}

export default App;
