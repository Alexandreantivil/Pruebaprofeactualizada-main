import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private storage: Storage
  ) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    const storedUsername = await this.storage.get('username');
    if (storedUsername) {
      this.username = storedUsername;
      console.log('Stored Username:', storedUsername);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  async saveUsername() {
    // Almacena el nombre de usuario en Local Storage
    await this.storage.set('username', this.username);
    this.showToast('Nombre de usuario guardado.');
  }

  irCamaraPage() {
    this.router.navigate(['/camara']);
  }
}
