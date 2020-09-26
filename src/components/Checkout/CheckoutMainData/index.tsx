import CheckoutDescriptionContainer from "../CheckouDescriptionContainer";
import React from "react";
import { MainDataContainer, Border } from "./styles";

const CheckoutMainData =  ({ flight }: { flight: any | null }) => {
    return (
        <MainDataContainer>
            <CheckoutDescriptionContainer flight={flight?.inFlight} type={"out"} />
            <Border />
            <CheckoutDescriptionContainer flight={flight?.outFlight} type={"in"} />
        </MainDataContainer>
    )
}

export default CheckoutMainData;
