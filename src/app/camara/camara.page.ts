import { Component, OnInit } from '@angular/core';
import { PhotoService } from '..//photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(
    public photoService: PhotoService,
    private menu: MenuController,
    private router: Router,
    private navCtrl: NavController  // Agrega NavController aquí
  ) {
    defineCustomElements(window);
  }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  camara() {
    this.router.navigate(['camara']);
    this.menu.close('end');
  }

  geolocalizacion() {
    this.router.navigate(['geo']);
    this.menu.close('end');
  }

  home() {
    this.router.navigate(['home']);
    this.menu.close('end');
  }
  irAHome2() {
    this.router.navigate(['home2']);
    this.menu.close('end');
  }

  volver() {
    this.navCtrl.navigateBack(['']);
  }
}
