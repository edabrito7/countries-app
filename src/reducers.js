import { CHANGE_SEARCH_FIELD } from './constants';
import { 
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAILED,
    CHANGE_REGION_DROPDOWN
} from './constants';


const initialStateSearchField = {
    searchField: '',
}

const initialStateCountries = {
    isPending: false,
    countries: [],
    error: ''
}

const initialStateRegion = {
    region: '',
}


export const searchCountries = (state=initialStateSearchField, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload, isPending: true,result:[{"title": action.payload}]});
        default:
            return state;
    }
}

export const regionCountries = (state=initialStateRegion, action={}) => {
    switch(action.type) {
        case CHANGE_REGION_DROPDOWN:
            return Object.assign({}, state, {region: action.payload});
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