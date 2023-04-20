import { AfterViewInit, Component } from '@angular/core';
import { Map, polygon, tileLayer } from 'leaflet';

import { ds02004 } from '../assets/data/02-004';
import { ds02011 } from '../assets/data/02-011';
import { ds02013 } from '../assets/data/02-013';
import { ds02014 } from '../assets/data/02-014';
import { ds02021 } from '../assets/data/02-021';
import { ds02026 } from '../assets/data/02-026';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    // http://leaflet-extras.github.io/leaflet-providers/preview/
    const mapProblemas = new Map('map');

    const ds02021Array: [number, number][] = [];
    ds02021.forEach((element) => {
      ds02021Array.push([element.lat, element.long]);
    });
    polygon(ds02021Array, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    const ds02004Array: [number, number][] = [];
    ds02004.forEach((element) => {
      ds02004Array.push([element.lat, element.lng]);
    });
    polygon(ds02004Array, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
    }).addTo(mapProblemas);

    const ds02014Array: [number, number][] = [];
    ds02014.forEach((element) => {
      ds02014Array.push([element.lat, element.lng]);
    });
    polygon(ds02014Array, {
      color: 'yellow',
      fillColor: 'yellow',
      fillOpacity: 0.2,
    }).addTo(mapProblemas);

    const ds02026Array: [number, number][] = [];
    ds02026.forEach((element) => {
      ds02026Array.push([element.lat, element.lng]);
    });
    polygon(ds02026Array, {
      color: 'black',
      fillColor: 'black',
      fillOpacity: 0.2,
    }).addTo(mapProblemas);

    const ds02011Array: [number, number][] = [];
    ds02011.forEach((element) => {
      ds02011Array.push([element.lat, element.lng]);
    });
    polygon(ds02011Array, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    const ds02013Array: [number, number][] = [];
    ds02013.forEach((element) => {
      ds02013Array.push([element.lat, element.lng]);
    });
    polygon(ds02013Array, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2,
    }).addTo(mapProblemas);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapProblemas);

    mapProblemas.setView([36.68519, -6.13229], 15);

    var overlays = {};
  }
}
