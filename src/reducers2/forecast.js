import axios from 'axios';
export const FETCH_FORECAST = 'FETCH_FORECAST';

const INITIAL_STATE = [];

// Action-creator responsible for fetching weather forecast
export const fetchForecast = (coords) => {
    const { latitude, longitude } = coords;
    const action = { type: FETCH_FORECAST, coords }
    return action;
}

// Returns the data from the api for the weather forecast.
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FORECAST:
            return action.coords;
        default:
            return state;
    }
}

// forecast thunks
export const getForecast = (coords) => dispatch => {
    const { latitude, longitude } = coords;
    axios.get(`api/forecast?latitude=${latitude}&longitude=${longitude}`)
        .then(res => {
            dispatch(fetchForecast(res.data))
        })
}