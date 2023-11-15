import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../modelo/ClProducto';
import { ProductServiceService } from 'src/app/producto/product-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  nombreprodErrorL: string = "";
  precioErrorL: string = "";
  direccionErrorL: string = "";

  productForm!: FormGroup;
  producto: ClProducto = {
    idProducto: 0,
    codigo: '09-G03',
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    fechaNacimiento: '',
    rut: '0',
    dv: '0',
    enfermedad: '0',
    fonocontacto: 0,
    categoria: '0',
    editorial: '0',
    raza: '0',
    edad: 0,
    altura: 0,
    hrini: '0',
    hrfin: '0',
    direccion: '',
    fCreacion: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      "prod_name": [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required],
    });
  }

  async onFormSubmit(form: NgForm) {
    this.nombreprodErrorL = '';
    this.precioErrorL = '';
    this.direccionErrorL = '';

    if (!/^[A-Za-z]+$/.test(this.producto.nombreprod)) {
      this.nombreprodErrorL = 'El nombre del producto debe contener solo letras.';
      return;
    }

    if (!/^\d+$/.test(this.producto.precio.toString())) {
      this.precioErrorL = 'El precio del producto debe ser un número entero válido.';
      return;
    }

    if (!/^[A-Za-z]+$/.test(this.producto.direccion)) {
      this.direccionErrorL = 'La descripcion del producto debe contener solo letras.';
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();

    console.log("Datos que se van a enviar:", this.producto);

    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page", res);
          loading.dismiss();
          if (res == null) {
            console.log("Next No se agregó, Res es Null");
            return;
          }
          console.log("Next ¡Se agregó correctamente! Navegaré a la lista de productos;", this.router);
          this.router.navigate(['/product-list']);
        },
        complete: () => { },
        error: (err) => {
          console.log("Error AddProduct Página", err);
          loading.dismiss();
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje");
  }
}
