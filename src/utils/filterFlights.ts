import _ from 'lodash';

export const filterFlightsFetchedData = (flights: Array<object>) => {
    return flights.map((flight: any) => {
        return {
            carrier: flight.itinerary.carrier,
            originCity: flight.itinerary.originGeoname.City,
            destinationCity: flight.itinerary.destinationGeoname.City,
            destination: flight.itinerary.destination,
            origin: flight.itinerary.origin,
            startDateTime: flight.itinerary.startDateTime,
            endDateTime: flight.itinerary.endDateTime,
            flightKey: flight.itinerary.flightKey,
            inFlight: _.isArray(flight.itinerary.inFlights) ? filterFlightData(flight.itinerary.inFlights[0]) : null,
            outFlight: _.isArray(flight.itinerary.outFlights) ? filterFlightData(flight.itinerary.outFlights[flight.itinerary.inFlights.length - 1]) : null,
            price: flight.cost.price,
            isRoundTrip: flight.itinerary.isRoundTrip,
            isRefundable: flight.itinerary.isRefundable
        }
    })
}

const filterFlightData = (flight: any) => {
    return {
        leaving: flight.leaving,
        arriving: flight.arriving,
        duration: flight.duration,
        originAirportFullName: flight.originAirportFullName,
        destinationAirportFullName: flight.destinationAirportFullName,
        originAirportCode: flight.originAirportCode,
        destinationAirportCode: flight.destinationAirportCode,
        arriveDateTime: flight.arriveDateTime,
        departDateTime: flight.departDateTime,
        flightNumber: flight.flightNumber,
        carrierImage: flight.carrierImage.replace('//', 'http://'),
        operatingAirlineCompanyName: flight.OperatingAirlineCompanyName
    }
}