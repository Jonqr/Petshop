
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PetshopService } from "../services/domain/petshop.service";
import { TipoServicoService } from '../services/domain/TipoServico.service';
import { AgendaFuncionarioService } from "../services/domain/AgendaFuncionario.service";
import { TipoAnimalService } from "../services/domain/TipoAnimal.service";
import { FuncionarioService } from "../services/domain/Funcionario.service";
import { PetshopsPage } from "../pages/petshops/petshops";

import { ClienteService } from "../services/domain/Cliente.service";
import { Geolocation } from '@ionic-native/geolocation';
import { AnimalService } from './../services/domain/Animal.service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PetshopService,
    TipoServicoService,
    AgendaFuncionarioService,
    TipoAnimalService,
    FuncionarioService,
    ClienteService,
    AnimalService,
    Geolocation

     // importar o servico que consome api
  ]
})
export class AppModule {}
