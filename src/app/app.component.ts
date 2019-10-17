import { Component } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULAR-API';
  cityName = '';
  weatherData = {
    name: '',
    temp: '',
    imageUrl: '',
    weatherStatus: ''
  };
  today = new Date();

  constructor(
    private weatherService: WeatherServiceService,
    private formBuilder: FormBuilder
    ) { }

  getWeather() {
    this.weatherService
      .getCityWeather(this.cityName).subscribe(
        res => {
          this.weatherData.name = res['name'] + ',' + res['sys']['country'];
          this.weatherData.temp = res['main'].temp;
          this.weatherData.imageUrl = 'http://openweathermap.org/img/wn/' + res['weather'][0]['icon ']+ '@2x.png';
          this.weatherData.weatherStatus = res['weather'][0]['description'];
        },
        err => console.log('error', err)
      );
  }
}
