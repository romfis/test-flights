import React from 'react';
import { FlexContainer, FlightWrapper, BackButton } from './styles';
import {useSelector} from "react-redux";
import {getCurrentFlight} from "../../selectors/Flight";
import { history } from "../../store";
import CheckoutHeaderContainer from '../../components/Checkout/CheckoutHeaderContainer';
import CheckoutMainData from '../../components/Checkout/CheckoutMainData';
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Checkout = () => {

    const flight = useSelector(getCurrentFlight)

    if(!flight) { history.push('/') }

    return (
        <FlexContainer>
            <FlightWrapper>
                <CheckoutHeaderContainer flight={flight} />
                <CheckoutMainData flight={flight} />
            </FlightWrapper>
            <BackButton onClick={() => history.push('/')}>
                <FontAwesomeIcon className="arrows-icons" icon={faLongArrowAltLeft}/>
            </BackButton>
        </FlexContainer>
    )
}

export default Checkout;
