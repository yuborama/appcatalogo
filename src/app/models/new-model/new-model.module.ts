import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewModelPageRoutingModule } from './new-model-routing.module';

import { NewModelPage } from './new-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewModelPageRoutingModule
  ],
  declarations: [NewModelPage]
})
export class NewModelPageModule {}
