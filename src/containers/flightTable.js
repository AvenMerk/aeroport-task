import React from 'react';
import Flight from '../components/flight';
import Grid from '@material-ui/core/Grid';

const flights = [
    {
        time: '20:00',
        city: 'Москва',
        number: 'AZ202',
        status: 'В ожидании посадки'
    }, {
        time: '22:00',
        city: 'Рим',
        number: 'TY205',
        status: 'Задерживается'
    }, {
        time: '19:20',
        city: 'Воронеж',
        number: 'AW502',
        status: 'В полете'
    }, {
        time: '02:00',
        city: 'Севастополь',
        number: 'AZ202',
        status: 'В ожидании посадки'
    }, {
        time: '12:00',
        city: 'Лондон',
        number: 'AZ202',
        status: 'Задерживается'
    }, {
        time: '14:00',
        city: 'Москва',
        number: 'AZ202',
        status: 'В полете'
    }, {
        time: '20:30',
        city: 'Афины',
        number: 'AZ202',
        status: 'Посадка закончена'
    }, {
        time: '05:00',
        city: 'Чебоксары',
        number: 'AZ202',
        status: 'Отменен'
    }, {
        time: '13:00',
        city: 'Владивосток',
        number: 'AZ202',
        status: 'Посадка закончена'
    },
];

class FlightTable extends React.Component {
    render() {
        return <React.Fragment>
            <div className="aero-table-block">
                <div className="aero-flex aero-add-zero-margin">
                    <Grid item xs={3}><p className="aero-centred">Город</p></Grid>
                    <Grid item xs={3}><p className="aero-centred">Время</p></Grid>
                    <Grid item xs={3}><p className="aero-centred">Номер рейса</p></Grid>
                    <Grid item xs={3}><p className="aero-centred">Статус</p></Grid>
                </div>
            </div>

            <div>
                {flights.map((flight, index) =>
                    <div key={index}>
                        <Flight time={flight.time}
                                city={flight.city}
                                number={flight.number}
                                status={flight.status}
                        />
                    </div>
                )}
            </div>
        </React.Fragment>
    }
}

export default FlightTable;