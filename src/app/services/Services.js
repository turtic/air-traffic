import fetchJsonp from 'fetch-jsonp'
import Flight from '../models/FlightModel';


export const getPosition123 = function (options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

export const getFlights = function (lat, long) {

    lat = lat.toFixed(6);
    long = long.toFixed(6);
  
    let url = `https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${lat}&lng=${long}&fDstL=0&fDstU=100`;
    
    return fetchJsonp(url)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            return json
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
}

export const sortResponse = function (response) {

    // creat array of Flights
    let aircraftList = response.acList.map(flight => {
        return new Flight(flight)
    });

    // sort by altitude
    aircraftList.sort(function (a, b) {
        return b.altitude - a.altitude;
    });

    return aircraftList;
}

