import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FlightTable from './containers/flightTable';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Header />
            <FlightTable />
        </React.Fragment>
    );
  }
}

export default App;
