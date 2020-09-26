import React from 'react';
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight, faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {FlightInteface} from '../../../store/entities/Flight/Flight.reducer'
import {DescriptionContainer, DescriptionWrapper, DepartureContainer, TimeSpan} from './styles';

type FlightType = 'out' | 'in'

const ResultDescriptionContainer = ({flight, type}: { flight: FlightInteface, type: FlightType }) => {
    return (
        <DescriptionContainer>
            <DepartureContainer>
                <DescriptionWrapper>
                    <h3>{flight.leaving}</h3>
                    <TimeSpan>{moment(flight.departDateTime).format("YYYY-MM-DD")}</TimeSpan>
                </DescriptionWrapper>
                <DescriptionWrapper>
                    <h4>{flight.originAirportFullName}</h4>
                    <span>({flight.originAirportCode})</span>
                </DescriptionWrapper>
            </DepartureContainer>
            {
                type === 'out' ?
                    (<FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltRight}/>)
                    :
                    (<FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltLeft}/>)
            }
            <DepartureContainer>
                <DescriptionWrapper>
                    <h3>{flight.arriving}</h3>
                    <TimeSpan>{moment(flight.arriveDateTime).format("YYYY-MM-DD")}</TimeSpan>
                </DescriptionWrapper>
                <DescriptionWrapper>
                    <h4>{flight.destinationAirportFullName}</h4>
                    <span>({flight.destinationAirportCode})</span>
                </DescriptionWrapper>
            </DepartureContainer>
        </DescriptionContainer>
    )
}

export default ResultDescriptionContainer;