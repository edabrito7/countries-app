import { CHANGE_SEARCH_FIELD } from './constants';
import { 
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAILED
} from './constants';


const initialState = {
    searchField: '',
    isPending: false,
    results: []
}

const initialStateCountries = {
    isPending: false,
    countries: [],
    error: ''
}


export const searchCountries = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload, isPending: true,result:[{"title": action.payload}]});
        default:
            return state;
    }
}


export const requestCountries = (state=initialStateCountries, action={}) => {
    switch(action.type) {
        case REQUEST_COUNTRIES_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_COUNTRIES_SUCCESS:
            return Object.assign({}, state, {countries: action.payload, isPending: false})
        case REQUEST_COUNTRIES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}