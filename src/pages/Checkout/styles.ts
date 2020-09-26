import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #e4e4e4;
`

export const FlightWrapper = styled(FlexContainer)`
    width: 80%;
    height: 90%;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
    flex-direction: column;
`

export const BackButton = styled.span`
    position: absolute;
    top: 4em;
    left: 4em;
    border-radius: 50%;
    padding: 15px;
    border: 1px solid black;
    &:hover {
        background: #dadada;
        cursor: pointer;
    }
`