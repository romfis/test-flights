import React from 'react';
import {
    ResultContainer, PaginationContainer,
} from "./styles";
import ResultTable from '../../components/Result/ResultTable';
import SearchBar from "../../components/Result/SearchBar";
import Pagination from '@material-ui/lab/Pagination';
import { getTotalPage } from '../../selectors/Flight';
import {useDispatch, useSelector} from "react-redux";
import {addRequestParam} from "../../store/entities/Request/Request.actions";
import {getFlightEntity} from "../../selectors/Flight";
import { getCurrentPage } from '../../selectors/Request';
import { fetchFlights } from '../../store/entities/Flight/Flight.actions';


const Result = () => {

    const dispatch = useDispatch();

    const currentPage = useSelector(getCurrentPage)
    const listOfFlights = useSelector(getFlightEntity)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(addRequestParam('page', value))
        dispatch(fetchFlights())
    };

    const pageCount = useSelector(getTotalPage)

    return (
        <ResultContainer>
            <SearchBar />
            <ResultTable />
            { !!(listOfFlights.flights || []).length &&
                (<PaginationContainer>
                    <Pagination id="pagination" count={pageCount} color="primary" page={currentPage} onChange={handleChange} />
                </PaginationContainer>)
                    }
        </ResultContainer>
    )
}


export default Result;
