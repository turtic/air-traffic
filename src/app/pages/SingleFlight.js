import React from 'react';
import '../App.css';
import fallback from '../../assets/fallback.jpg';
import { getPosition123, getFlights, sortResponse } from '../services/Services';
import loaderPlsWait from '../../assets/loaderPlsWait.gif';
import Header from '../partials/Header';

class SingleFlight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flightData: { logo: '' },
            loading: true
        }
    };

    logoLink() {
        return `https://logo.clearbit.com/${this.state.flightData.logo.split(' ').join('').toLowerCase()}.com`
    }

    componentDidMount() {
        // get single flight info
        getPosition123().then((position) => {
            getFlights(position.coords.latitude, position.coords.longitude).then((response) => {
                let obj = sortResponse(response).find(o => o.flightID + '' === this.props.match.params.id);
                this.setState({
                    flightData: obj || { logo: '', model: 'Flight is out of range', from: 'unknown', to: 'unknown' },
                    loading: false
                });
            })
        })

    }
    render() {

        return (

            <div className="App">
                <Header />
                {this.state.loading ? <img src={loaderPlsWait} alt="LOADING" width="50%" /> :
                    <div className="flight-item single">
                        <img onError={(e) => { e.target.src = fallback }} src={this.logoLink()} alt="company logo" />
                        <p>Model: {this.state.flightData.model}</p>
                        <p>Flying from {this.state.flightData.from} to {this.state.flightData.to}</p>

                    </div>
                }
            </div>

        )
    }
}

export default SingleFlight;