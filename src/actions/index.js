import axios from 'axios';

const API_KEY = "fd16a2f5f8d008aaff75581530757656";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //construct request url using input city
  const url = `${ROOT_URL}&q=${city},us`;
  //make the ajax request
  const request = axios.get(url);

  console.log("Request:", request);

  //this action will have the type FETCH_WEATHER and returns the request data
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
