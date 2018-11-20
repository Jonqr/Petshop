import { PetshopDTO } from './../../models/Petshop';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaFuncionarioDTO } from "../../models/AgendaFuncionario";
import { AgendaFuncionarioService } from "../../services/domain/AgendaFuncionario.service";
import { DateTimeData } from 'ionic-angular/umd/util/datetime-util';


@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  dataInicial:any;
  petshop = this.navParams.get('petshop');
  petEscolhido = this.navParams.get('pet');
  servicoEscolhido=  this.navParams.get('servico');
  Agenda : AgendaFuncionarioDTO[];
  Calendario: AgendaFuncionarioDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public AgendaService : AgendaFuncionarioService) {
  }

  ionViewDidLoad() {
  this.AgendaService.findAll()// buscando um cliente padrão para simula~ção
    .subscribe(response =>{
      this.Agenda = response;
      this.Calendario = this.Agenda;
    },
    error =>{
      console.log(error);
    });
  }


   
  separaDataAPI():void{
    
    
  }

  
  buscar():void {
    var agendamento = [];
    var dia, mes, ano, hora;
    //for (let i = 0; i < this.Agenda.length; i++) {
      var date:any;
      for (let i = 0; i < this.Agenda.length; i++) {
        date  = this.Agenda[i].Data;
        var aux = date.split(/(\s+)/).filter(function(val){return val.trim().length > 0;});
        var ax = aux[0].split('/').map(function(val){return+ val;});
        if(this.dia==ax[0] && this.mes ==ax[1]){
          agendamento.push(this.Agenda[i]);
        }
      }
      this.Calendario = agendamento;
  }
  

  dia:any;mes:any;
  separaDataInicial(){
    var  ano;
    var data = this.dataInicial.split('-').map(function(val){return+ val;});
    this.dia = data[2];
    this.mes = data[1];
    ano = data[0];
  }



}
