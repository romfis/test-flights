import React from 'react';
import {
    FlightContainer,
    Border,
    ResultRowContainerWrapper,
    PriceContainer,
    Price,
    PriceBorder
} from './styles';
import {ResultRowInteface} from '../../../store/entities/Flight/Flight.reducer';
import ResultDescriptionContainer from "../ResultDescriptionContainer";
import { useDispatch } from "react-redux";
import {choseFlight} from "../../../store/entities/Flight/Flight.actions";
import { history } from "../../../store";

const ResultRow = (props: ResultRowInteface) => {

    const dispatch = useDispatch()

    const {
        carrier,
        inFlight,
        outFlight,
        price
    } = props;

    const handleChoseFlight = () => {
        dispatch(choseFlight({...props}));
        history.push('/checkout');
    }

    return (
        <ResultRowContainerWrapper onClick={handleChoseFlight} className="row">
            <PriceContainer>
                <Price>{carrier}</Price>
                <h3>Price:</h3>
                <Price>{price}$</Price>
            </PriceContainer>
            <PriceBorder/>
            <FlightContainer>
                <ResultDescriptionContainer flight={outFlight} type="out"/>
                {inFlight ? (
                    <>
                        <Border/>
                        <ResultDescriptionContainer flight={inFlight} type="in"/>
                    </>
                ) : null
                }
            </FlightContainer>
        </ResultRowContainerWrapper>
    )
}

export default ResultRow;