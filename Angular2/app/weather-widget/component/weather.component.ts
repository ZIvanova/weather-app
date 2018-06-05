import { Component } from "@angular/core";

import { WeatherService } from '../service/weather.service'

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [ WeatherService ]
})

export class WeatherComponent {
    pos: [number, number];


    // Dependency Injection
    constructor(private service: WeatherService) {
        // this.pos = this.service.getCurrentLocation();  
        this.pos = [0,0];
        this.service.getCurrentWeather(this.pos[0], this.pos[1])
        .subscribe(weather => console.log(weather),
        err =>console.error(err));
    }
 }