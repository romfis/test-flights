import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
`

export const ResultRowContainer = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 0.5em;
`

export const PriceContainer = styled(ResultRowContainer)`
    flex: 0 20%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3, h4 {
        margin: 0
    }
`

export const ResultRowContainerWrapper = styled(ResultRowContainer)`
    width: 90%;
    height: 10em;
    background: #3ea0f6;
    border: 1px solid #0a5ca5;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.75);
    &:hover {
        opacity: 0.9;
    }
`

export const FlightContainer = styled(FlexContainer)`
    flex-direction: row;
    flex: 0 80%
    justify-content: center;
    align-items: center;
`

export const Border = styled.div`
    width: 25%;
    height: 2px;
    border-bottom: 1px solid #fff;
`

export const PriceBorder = styled.div`
    height: 65%;
    border-right: 1px solid #ffffff;
`

export const Price = styled.h3`
    color: #fff
`