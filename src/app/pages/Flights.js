import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { getPosition123, getFlights, sortResponse } from '../services/Services';
import airplane from '../../assets/airplane.svg'
import loaderPlsWait from '../../assets/loaderPlsWait.gif'
import Header from '../partials/Header';

class Flights extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flightList: [],
            loading: true,
            geolocation: true,
            refresh: ''
        };

    }
    getAllInfo() {

        getPosition123().then((position) => {
            getFlights(position.coords.latitude, position.coords.longitude).then((response) => {
                this.setState({
                    flightList: sortResponse(response),
                    loading: false
                });
            })
        }).catch((err) => {
            this.setState({
                geolocation: false,
                loading: false
            });
        });


    }

    componentDidMount() {
        // get coordinates and flight data
        this.getAllInfo();

        // refresh info every 60sec
        this.setState({
            refresh: setInterval(() => { this.getAllInfo(); }, 60000)
        });

    }

    componentWillUnmount() {
        // clear refresh interval
        clearInterval(this.state.refresh)

    }

    render() {
        return (
            <div className="App">

                <Header/>

                {(!this.state.geolocation) ? <p>App needs geolocation to work, please turn on geolocation</p> : ''}

                {this.state.loading ? <img src={loaderPlsWait} alt="LOADING" width="50%" /> :
                    this.state.flightList.map(flight => {
                        return <Link key={flight.flightID} to={{
                            pathname: `flight/${flight.flightID}`,
                            myCustomProps: { flight }
                        }}>
                            <div className="flight-item">
                                <img src={airplane} style={{ transform: `rotate(${flight.direction - 90}deg)` }} alt="company logo" height="100" width="100" />
                                <p>Flight ID: {flight.flightID}</p>
                                <p>Altitude: {flight.altitude}</p>
                            </div>
                        </Link>
                    })}

            </div>
        );
    }
}

export default Flights;