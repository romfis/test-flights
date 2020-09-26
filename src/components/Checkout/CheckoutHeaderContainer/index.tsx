import React from "react";
import {HeaderContainer, CompanyHeaderContainer, DestinationContainer, PriceContainer, RefContainer} from "./styles";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
const CheckoutHeaderContainer = ({ flight }: { flight: any | null }) => {

    return(
        <HeaderContainer>
            <CompanyHeaderContainer>
                <h2>{flight?.carrier}</h2>
                <DestinationContainer>
                    <h3>{flight?.originCity} ({flight?.origin})</h3>
                    <FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltRight}/>
                    <h3>{flight?.destinationCity} ({flight?.destination})</h3>
                </DestinationContainer>
                <DestinationContainer>
                    <span>Leave: {moment(flight?.startDateTime).format("YYYY-MM-DD")}</span>-<span>Return: {moment(flight?.endDateTime).format("YYYY-MM-DD")}</span>
                </DestinationContainer>
                <PriceContainer>
                    <h3>Cost: {flight?.price}</h3>
                    <RefContainer>
                        <h3>Is refundable: { flight?.isRefundable ? "Yes" : "No" }</h3>
                        <h3>Is round trip: { flight?.isRoundTrip ? "Yes" : "No" }</h3>
                    </RefContainer>
                </PriceContainer>
            </CompanyHeaderContainer>
        </HeaderContainer>
    )
}


export default CheckoutHeaderContainer;