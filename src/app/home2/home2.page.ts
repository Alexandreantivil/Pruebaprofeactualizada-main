import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  volver() {
    this.navCtrl.navigateBack(['/home2']); // Puedes ajustar la ruta según sea necesario
  }

}
