import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
