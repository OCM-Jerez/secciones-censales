import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Icon, Map, marker, polygon, tileLayer } from 'leaflet';

import { ds01001 } from '../assets/data/01-001';
import { ds01002 } from '../assets/data/01-002';
import { ds01003 } from '../assets/data/01-003';
import { ds01004 } from '../assets/data/01-004';
import { ds01005 } from '../assets/data/01-005';

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
export class AppComponent implements AfterViewInit, OnInit {
  constructor() {}

  ngOnInit(): void {
    const initialArray = [];
    // const ds02003 = initialArray.map(([lng, lat]) => ({ lng, lat }));
    // const tsContent = `export const ds01001 = ${JSON.stringify(
    //   ds02003,
    //   null,
    //   4
    // )};\n`;
    // console.log(tsContent);

    // const o = initialArray.map(([lng, lat]) => ({ lat, lng }));
    // console.log(o);
  }

  ngAfterViewInit(): void {
    // http://leaflet-extras.github.io/leaflet-providers/preview/
    const mapProblemas = new Map('map');

    const ds01001Array: [number, number][] = [];
    ds01001.forEach((element) => {
      ds01001Array.push([element.lat, element.lng]);
    });
    polygon(ds01001Array, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    let Array: [number, number][] = [];
    ds01002.forEach((element) => {
      Array.push([element.lat, element.lng]);
    });
    polygon(Array, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    let Array01003: [number, number][] = [];
    ds01003.forEach((element) => {
      Array01003.push([element.lat, element.lng]);
    });
    polygon(Array01003, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    let Array01004: [number, number][] = [];
    ds01004.forEach((element) => {
      Array01004.push([element.lat, element.lng]);
    });
    polygon(Array01004, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    let Array01005: [number, number][] = [];
    ds01005.forEach((element) => {
      Array01005.push([element.lat, element.lng]);
    });
    polygon(Array01005, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.1,
    }).addTo(mapProblemas);

    // ================================================================================================

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

    const ideaIcon = new Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      // shadowAnchor: [22, 94]
    });

    const ideas = [
      {
        title: `<h1>Sección censal 02-0004</h1>
          <h3>Datos</h3>
  
          <img src="https://res.cloudinary.com/dabrencx7/image/upload/v1647547099/albarizuela/fotosRutas/Caldereros_sxrbgn.jpg" alt="Don Juan" width="100px">
         `,
        lat: 36.68528,
        long: -6.13279,
      },
      {
        title: ``,
        lat: 36,
        long: -6,
      },
    ];

    ideas.map((point) => {
      marker([point.lat, point.long], {
        icon: ideaIcon,
      })
        .addTo(mapProblemas)
        .bindPopup(point.title);
    });

    var overlays = {};

    // const text = 'Hello, World!';
    // const icon = divIcon({
    //   className: 'custom-text-marker',
    //   html: `<div>${text}</div>`,
    // });

    // const coordinates = [-6.13279, 36.68528];
    // // const coordinates = [36.68528, , -6.13279];
    // marker([coordinates], {
    //   icon: ideaIcon,
    // })
    //   .addTo(mapProblemas)
    //   .bindPopup(point.title);
  }
}
