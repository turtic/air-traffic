export default class Flight {
    constructor (flight){
        this.flightID = flight.Id || 'not available';
        this.altitude = flight.Alt || 'not available';
        this.model = flight.Mdl || 'not available';
        this.to = flight.To || 'not available';
        this.from = flight.From || 'not available';
        this.logo = flight.Op || 'not available';
        this.direction = flight.Trak || 0;
    }
}
