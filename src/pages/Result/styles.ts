import styled from 'styled-components';

export const ResultContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
`

export const SearchBarContainer = styled(ResultContainer)`
    flex: 0 12%;
    background: #3fa0f7;
    height: 12%
    border-bottom: 1px solid #0a5ca5;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
`

export const ContainerWrapper = styled(ResultContainer)`
    flex-direction: row;
`

export const PaginationContainer = styled.div`
    width: 100%;
    border-top: 1px solid #0a5ca5;
    box-shadow: inset 0px 5px 5px 0px rgba(0,0,0,0.75);
    #pagination {
      margin: 2em;
      display: flex;
      flex: 1 8%;
      justify-content: center;
   }
`