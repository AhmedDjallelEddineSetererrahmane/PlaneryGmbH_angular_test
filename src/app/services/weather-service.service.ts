import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0e16df06b6e5088ff909d8e67c46bf5f';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {

  constructor(private httpClient: HttpClient) { }

  getCityWeather = (city) => {
    const getUrl = API_URL + '?q=' + city + '&APPID=' + API_KEY;
    return this.httpClient.get(getUrl);
  }
}
