import styled from "styled-components";
import {ContainerWrapper} from "../../../pages/Result/styles";

export const SearchBarContainerWrapper = styled(ContainerWrapper)`
    flex: 0;
    justify-content: space-evenly;
    width: 96%;
    border: 1px solid #fff;
    border-radius: 10px;
    background: #fff;
    
    .MuiFormControl-marginNormal {
        margin-top: 8px;
    }
    
    .search_btn {
        height: 4em;
    }
    
    .numbersOf {
        max-width: 75px;
    }
    
    .dates {
        max-width: 175px;
    }
`