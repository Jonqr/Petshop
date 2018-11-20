import { ClienteService } from './../../services/domain/Cliente.service';
import { ClienteDTO } from './../../models/Cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: string;
  password: string;
  clientes: ClienteDTO;
  alertAviso: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ClienteService: ClienteService){
  }

  ionViewDidLoad() {
    this.ClienteService.findById(1)
    .subscribe(response =>{
      this.clientes = response;
    },
    error =>{
      console.log(error);
    });
  }

 
  abrirCadastro(): void{
    this.navCtrl.setRoot("MeuCadastroPage");
  }
  esqueciSenha():void{
    this.alertAviso = 'se vira !!';
  }
  abrirTabs():void{
    if(this.login == 'admin' && this.password == '123'){
      this.navCtrl.setRoot("PetshopsPage");
    }else{
      this.alertAviso = 'Senha ou Usuario Invalidos !';
    }
    
    /*
    if(this.login == this.clientes.email && this.password == '123'){
      this.navCtrl.setRoot("PetshopsPage");
    }else{
      this.alertAviso = 'Senha ou Usuario Invalidos !';
    }
    */
  }


}
