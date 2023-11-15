import { Component, OnInit } from '@angular/core';
import { ClPerfil } from '../model/ClPerfil';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-perfil-all',
  templateUrl: './perfil-all.page.html',
  styleUrls: ['./perfil-all.page.scss'],
})
export class PerfilAllPage implements OnInit {


  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  perfil: ClPerfil = { id: 0, fechanacimiento: new Date(0), usuario: '', correo: '', clave:'' };;


  constructor(private navCtrl: NavController) { }
  ngOnInit() {  }
  public id: string = '';
  




  leer() {this.navCtrl.navigateForward('/perfil-list')}
  eliminar() { }
  grabar() { this.navCtrl.navigateForward('/perfil-add');}
  actualizar() { this.navCtrl.navigateForward('/perfil-edit');}
  grabarActualizarAutomatico() { }


}





