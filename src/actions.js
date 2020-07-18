import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAILED
} from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestCountries = () => (dispatch) => {
    dispatch({type: REQUEST_COUNTRIES_PENDING});
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha3code;population;capital;region;flag')
    .then(response =>{
      return response.json()
    })
    .then(data => dispatch({type: REQUEST_COUNTRIES_SUCCESS, payload: data}))
    .catch( error => dispatch({type: REQUEST_COUNTRIES_FAILED, payload: error}))
}