import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import {SearchBarContainerWrapper} from "./styles";
import {SearchBarContainer} from "../../../pages/Result/styles";
import {fetchFlights} from "../../../store/entities/Flight/Flight.actions";
import {addRequestParam} from "../../../store/entities/Request/Request.actions";
import {AppState} from "../../../store";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from 'moment';
import { SortType } from '../../../store/entities/Request/Request.reducer';
import { getParsedFilterValue } from '../../../selectors/Request';

const SearchBar = () => {
    const dispatch = useDispatch();

    const searchRequest = useCallback(() => {
        dispatch(fetchFlights());
    }, [dispatch]);

    useEffect(() => {
        searchRequest()
    }, [searchRequest])

    const handleChanges = (key: string, value: any) => {
        dispatch(addRequestParam(key, value))
    }

    const filter = useSelector(getParsedFilterValue);

    const handleChoseStops = (value: number) => {
        const arrayOfStops = generateArrayOfNumbers(value);
        const filterString = JSON.stringify({ filterStops: arrayOfStops })
        handleChanges('filter', filterString)
    }

    const generateArrayOfNumbers = (count: number) => {
        return Array.from({length: count}, (_, i) => i + 1);
    }

    const params = useSelector((state: AppState) => state.requestOptions);

    return (
        <SearchBarContainer>
            <SearchBarContainerWrapper>
                <TextField label="Departure" variant="outlined" value={params.origin || ''} onChange={(e: any) => handleChanges('origin', e.target.value)}/>
                <TextField label="Destination" variant="outlined" value={params.destination || ''} onChange={(e: any) => handleChanges('destination', e.target.value)}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className="dates"
                        disableToolbar
                        inputVariant="outlined"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Leave date"
                        value={params.leaveDate}
                        onChange={(date: MaterialUiPickersDate) => handleChanges('leaveDate', moment(date).format('YYYY-MM-DD'))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        className="dates"
                        disableToolbar
                        inputVariant="outlined"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Return date"
                        value={params.returnDate}
                        onChange={(date: MaterialUiPickersDate) => handleChanges('returnDate', moment(date).format('YYYY-MM-DD'))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField className="numbersOf" label="Adults" variant="outlined" value={params.numberOfAdults} onChange={(e: any) => handleChanges('numberOfAdults', e.target.value)}/>
                <TextField className="numbersOf" label="Children" variant="outlined" value={params.numberOfChildren} onChange={(e: any) => handleChanges('numberOfChildren', e.target.value)}/>
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={params.sortBy}
                        onChange={(e: any) => handleChanges('sortBy', e.target.value)}
                        label="Sort by"
                    >
                        { Object.values(SortType).map(type => (<MenuItem value={type}>{ type }</MenuItem>)) }
                    </Select>
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Stops</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={filter}
                        onChange={(e: any) => handleChoseStops(e.target.value)}
                        label="Stops"
                    >
                        { generateArrayOfNumbers(5).map(type => (<MenuItem value={type}>{ type }</MenuItem>)) }
                    </Select>
                </FormControl>

                <Button className="search_btn" variant="contained" color="primary" onClick={() => searchRequest()}>Search</Button>
            </SearchBarContainerWrapper>
        </SearchBarContainer>
    )
}

export default SearchBar;