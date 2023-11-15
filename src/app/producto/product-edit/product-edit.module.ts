import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductEditPageRoutingModule } from './product-edit-routing.module';
import { ProductEditPage } from './product-edit.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductEditPage]
})
export class ProductEditPageModule {}




