import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicoPetPage } from './servico-pet';

@NgModule({
  declarations: [
    ServicoPetPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicoPetPage),
  ],
})
export class ServicoPetPageModule {}
