import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ProductAddPageRoutingModule } from './product-add-routing.module';

import { ProductAddPage } from './product-add.page';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule si es necesario

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAddPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // Importa HttpClientModule si es necesario
  ],
  declarations: [ProductAddPage]
})
export class ProductAddPageModule {}
