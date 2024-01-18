import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Model1PageRoutingModule } from './model1-routing.module';

import { Model1Page } from './model1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Model1PageRoutingModule
  ],
  declarations: [Model1Page]
})
export class Model1PageModule {}
