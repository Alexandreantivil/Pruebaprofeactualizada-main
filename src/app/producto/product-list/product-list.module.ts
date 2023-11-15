import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductListPageRoutingModule } from './product-list-routing.module'; // Asegúrate de que la ruta es correcta
import { ProductListPage } from './product-list.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule // Asegúrate de que el nombre importado coincida con el nombre exportado en el módulo de enrutamiento
  ],
  declarations: [ProductListPage]
})
export class ProductListPageModule {}






