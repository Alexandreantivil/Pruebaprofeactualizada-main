import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Plugins } from '@capacitor/core';


const { GoogleMaps } = Plugins;


@Component({
  selector: 'app-geo',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit, AfterViewInit {
  private map: any; // Variable para mantener una referencia al mapa
  private mapElement: HTMLElement | null = null; // Inicializa mapElement como null


  constructor() {}


  ngOnInit() {}


  async ionViewDidEnter() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);


      // Aquí puedes agregar el código para mostrar la ubicación en un mapa de Google
      this.showLocationOnMap(coordinates.coords.latitude, coordinates.coords.longitude);
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }


  ngAfterViewInit() {
    // Obtén una referencia al elemento HTML donde mostrar el mapa
    this.mapElement = document.getElementById('map');
    if (this.mapElement) {
      this.loadMap(); // Llama a la función loadMap si mapElement no es nulo
    }
  }


  async requestPermission() {
    const status = await Geolocation.checkPermissions();
    if (status.location === 'granted') {
      // Ya tienes permiso
    } else if (status.location === 'denied') {
      // Necesitas solicitar permiso al usuario
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        // Permiso otorgado
      }
    }
  }


  // Método para mostrar la ubicación en un mapa de Google
  async showLocationOnMap(latitude: number, longitude: number) {
    if (this.map && this.mapElement) {
      // Crea un mapa usando los plugins de Capacitor
      GoogleMaps['create']({
        key: 'AIzaSyD4vjGRv87iAchqpCLx06qD23Spz1w9h38', // Reemplaza 'TU_API_KEY_AQUI' con tu clave de API de Google Maps
        el: this.mapElement!,
      }).then((map: any) => {
        this.map = map;


        // Personaliza el mapa según tus necesidades
        map.setCameraZoom(15); // Cambia el nivel de zoom del mapa
        map.setCameraTarget({ lat: latitude, lng: longitude }); // Centra el mapa en las coordenadas


        // Puedes agregar más personalizaciones aquí, como marcadores, polilíneas, etc.
      });
    }
  }


  // Método para cargar el mapa
  private loadMap() {
    if (this.mapElement) {
      this.showLocationOnMap(0, 0); // Puedes establecer coordenadas iniciales aquí
    }
  }
}




