import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetshopsPage } from './petshops';

@NgModule({
  declarations: [
    PetshopsPage,
  ],
  imports: [
    IonicPageModule.forChild(PetshopsPage),
  ],
})
export class PetshopsPageModule {}
