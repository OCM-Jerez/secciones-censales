import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { Icon, map, marker, polygon, tileLayer } from 'leaflet';
import { Icon, geoJSON, map, marker, tileLayer } from 'leaflet';

import { GeoJsonObject } from 'geojson';
import distritos from '../../assets/data/secionesCensales.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  geoJson: GeoJsonObject | undefined;
  // Configuración del mapa base.
  tileLayerConfig = {
    maxZoom: 17,
    minZoom: 10,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> Contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light',
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      // mouseout: this.resetHighlight,
      // click: this.zoomToFeature
    });
  };

  highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.5,
    });
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // http://leaflet-extras.github.io/leaflet-providers/preview/
    // const mamOCM = new Map('map');
    const mamOCM = map('map', {
      center: [36.684881, -6.125903],
      zoomControl: false,
      zoom: 15,
      // maxBounds: [
      //   // Esquina superior izquierda hasta donde permitira mover.
      //   [36.034027, -6.332731],
      //   // Esquina inferior derecha.
      //   [36.984881, -5.40752],
      // ],
    });

    tileLayer(
      'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      this.tileLayerConfig
    ).addTo(mamOCM);

    // mamOCM.setView([36.68519, -6.13229], 15);

    const geoJson = geoJSON(distritos as GeoJsonObject, {
      // style: this.style2(),
      // onEachFeature: this.onEachFeature,
    }).addTo(mamOCM);

    const iconGreen = new Icon({
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

    const iconRed = new Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
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
        icon: iconGreen,
        title: `<h1>Sección censal 02-0004</h1>
          <h3>Datos</h3>
            <img src="https://res.cloudinary.com/dabrencx7/image/upload/v1647547099/albarizuela/fotosRutas/Caldereros_sxrbgn.jpg" alt="Don Juan" width="100px">
         `,
        lat: 36.686587,
        long: -6.142346,
        tooltip: '32',
        colorTooltip: 'tooltipGreen',
      },
      {
        icon: iconRed,
        title: ``,
        lat: 36.68528,
        long: -6.13379,
        tooltip: '-25',
        colorTooltip: 'tooltipRed',
      },
    ];

    ideas.map((point) => {
      marker([point.lat, point.long], {
        icon: point.icon,
      })
        .addTo(mamOCM)
        .bindPopup(point.title)
        .bindTooltip(point.tooltip, {
          permanent: true,
          className: point.colorTooltip,
        });
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
    //   .addTo(mamOCM)
    //   .bindPopup(point.title);
  }
}
