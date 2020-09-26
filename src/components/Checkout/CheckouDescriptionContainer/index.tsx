import React from "react";
import { DescriptionContainer, DescriptionWrapper, DurationContainer } from "./styles";
import { TimeSpan} from "../../Result/ResultDescriptionContainer/styles";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltLeft, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

const CheckoutDescriptionContainer = (props: any) => {

    const {
        flight,
        type
    } = props;

    return (
        <DescriptionContainer>

            <DescriptionWrapper>
                <h4>{flight?.originAirportFullName}</h4>
                <span>({flight?.originAirportCode})</span>
            </DescriptionWrapper>

            <DescriptionWrapper>
                <h3>{flight?.leaving}</h3>
                <TimeSpan>{moment(flight?.departDateTime).format("YYYY-MM-DD")}</TimeSpan>
            </DescriptionWrapper>

            <DurationContainer>
                <h3>Duration: {flight?.duration} mins</h3>
            {
                type === 'out' ?
                    (<FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltRight}/>)
                    :
                    (<FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltLeft}/>)
            }
            </DurationContainer>


            <DescriptionWrapper>
                <h3>{flight?.arriving}</h3>
                <TimeSpan>{moment(flight?.arriveDateTime).format("YYYY-MM-DD")}</TimeSpan>
            </DescriptionWrapper>
            <DescriptionWrapper>
                <h4>{flight?.destinationAirportFullName}</h4>
                <span>({flight?.destinationAirportCode})</span>
            </DescriptionWrapper>
        </DescriptionContainer>
    )
}

export default CheckoutDescriptionContainer;