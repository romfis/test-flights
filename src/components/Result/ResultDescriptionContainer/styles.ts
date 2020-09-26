import styled from "styled-components";
import { FlexContainer } from "../ResultRow/styles";

export const DescriptionContainer = styled(FlexContainer)`
    flex-direction: row;
    align-items: center;
    .arrows-icons {
        color: #fff;
    }
`

export const DepartureContainer = styled(FlexContainer)`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    h3, h4 {
        margin: 0;
    }
 
`

export const DescriptionWrapper = styled.div`
    flex: 0 30%;
`

export const TimeSpan = styled.span`
    font-size: 13px;    
`