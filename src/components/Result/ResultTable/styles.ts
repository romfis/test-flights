import styled from "styled-components";
import {ResultContainer, ContainerWrapper} from "../../../pages/Result/styles";

export const ResultsBodyContainer = styled(ResultContainer)`
    flex: 1 88%;
    height: 80%;
    background: #e4e4e4;
`

export const ResultHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%; 
`

export const ResultWrapperContainer = styled(ContainerWrapper)`
    flex-wrap: wrap;
    overflow: auto;
    .row {
        &:nth-child(odd) {
            background: #0076de;
        }
    }
`