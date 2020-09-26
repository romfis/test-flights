import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    flex: 0 30%;
    flex-direction: row;
    border-bottom: 2px solid #e4e4e4;
`

export const CompanyHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const DestinationContainer = styled(CompanyHeaderContainer)`
    flex-direction: row;
    width: 30%;
    justify-content: space-evenly;
`;

export const PriceContainer = styled(DestinationContainer)`
    flex-direction: column;
`

export const RefContainer = styled(DestinationContainer)`
    width: 100%;
`