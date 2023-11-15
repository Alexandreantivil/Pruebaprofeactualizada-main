import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  username: string = ''; // Asegúrate de tener esta variable declarada en tu clase

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // Mueve esta lógica a algún evento o método que necesites (por ejemplo, al cargar la página)
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  navigateToAddProductPage() {
    // Aquí es donde realizas la navegación a la página de añadir producto
    this.router.navigate(['/product-add']);
    
    // o puedes usar navCtrl para la navegación
    // this.navCtrl.navigateForward('/product-add');
  }

  navigateToProductAllPage() {
    this.router.navigate(['/product-all']);
  }

  navigateToProductListPage() {
    this.router.navigate(['/product-list']);
  }
  navigateToProductDetailPage() {
    this.navCtrl.navigateForward('/product-detail');
  }

  navigateToProductEditPage() {
    this.navCtrl.navigateForward('/product-edit');
  }



  volver() {
    this.navCtrl.navigateBack(['']);
  }
}
