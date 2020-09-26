import React from 'react';
import ResultRow from '../ResultRow';
import { ResultsBodyContainer, ResultWrapperContainer } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux";
import {getFlights, getLoadingStatus} from '../../../selectors/Flight';

const ResultTable = () => {

    const flights = useSelector(getFlights);
    const loading = useSelector(getLoadingStatus);

    const renderFlights = () => {
        return flights?.map((flight, index) => {
            return (<ResultRow key={index} {...flight} />)
        })
    }

    return (
        <ResultsBodyContainer>
            <ResultWrapperContainer>
                { loading ? <CircularProgress/> : renderFlights() }
            </ResultWrapperContainer>
        </ResultsBodyContainer>
    )
}

export default ResultTable;