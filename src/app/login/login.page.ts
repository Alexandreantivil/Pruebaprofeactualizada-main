import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  login() {
    // Validar que ambos campos estén completos
    if (!this.username.trim() || !this.password.trim()) {
      this.showToast('Por favor, completa todos los campos para iniciar sesión.');
      
    }

    // Validar el formato del usuario (puedes ajustar esta expresión regular según tus requisitos)
    const usernameRegex = /^[a-zA-Z0-9_]{5,25}$/;
    if (!usernameRegex.test(this.username)) {
      this.showToast('El usuario debe contener entre 5 y 25 caracteres alfanuméricos o guiones bajos.');
      return;
    }

    // Validar el formato de la contraseña (puedes ajustar esta expresión regular según tus requisitos)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(this.password)) {
      this.showToast('La contraseña debe contener al menos 8 caracteres, una letra y un número.');
      return;
    }

    // Aquí deberías realizar la lógica real de inicio de sesión (autenticación).
    // Por ahora, solo navegaré a la página de inicio.
    // Reemplaza este bloque con tu lógica de autenticación real.

    // Ejemplo de lógica de autenticación (solo como referencia):
    // if (this.autenticarUsuario(this.username, this.password)) {
    //   // La autenticación fue exitosa, navega a la página de inicio
    //   this.router.navigate(['/home']);
    // } else {
    //   // La autenticación falló, muestra un mensaje de error
    //   this.showToast('Credenciales incorrectas. Inténtalo de nuevo.');
    // }

    // Por ahora, simplemente navegaré a la página de inicio.
    this.router.navigate(['/home']);
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  crearCuenta() {
    this.showToast('Ingresa tus datos');
    this.router.navigate(['/register']);
  }

  olvidasteContrasena() {
    this.navCtrl.navigateForward(['/recoverpass']);
  }

  administracion() {
    // Validar que ambos campos estén completos antes de navegar a la página de administración
    if (!this.username.trim() || !this.password.trim()) {
      this.showToast('Por favor, completa todos los campos antes de acceder a la administración.');
      return;
    }

    // Validar el formato del usuario y la contraseña (puedes agregar lógica adicional aquí si es necesario)
    // Ejemplo: Verificar si el usuario y la contraseña cumplen con ciertos requisitos adicionales

    // Si los campos están completos y pasan la validación, puedes continuar con la lógica de autenticación
    // Aquí deberías realizar la lógica real de inicio de sesión (autenticación).
    // Por ahora, solo navegaré a la página de administración.
    this.router.navigate(['/administracion']);
  }

  volver() {
    this.navCtrl.navigateBack(['']);
  }

  // Este método es solo un ejemplo y debería ser reemplazado por tu lógica de autenticación real
  private autenticarUsuario(username: string, password: string): boolean {
    // Aquí deberías realizar la autenticación real, por ejemplo, comparar con una base de datos
    // Este es solo un ejemplo de autenticación básica, no lo uses en un entorno de producción
    return username === 'usuario' && password === 'contrasena';
  }
}
