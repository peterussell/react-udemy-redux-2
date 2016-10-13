import axios from 'axios';

const API_KEY = 'c162707190fa0209dbc4d457d846731b';

/* This is an example of an ES6 Template String. Important, note the backticks in
   place of the quotation marks. */
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
