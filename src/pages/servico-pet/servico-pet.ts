import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";
import { ClienteService } from "../../services/domain/Cliente.service";
import { ClienteDTO } from "../../models/Cliente";
import { TipoServicoService } from "../../services/domain/TipoServico.service";
import { TipoServicoDTO } from "../../models/TipoServico";
import { FuncionarioService } from "../../services/domain/Funcionario.service";
import { AnimalDTO } from "../../models/Animal";

/**
 * Generated class for the ServicoPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico-pet',
  templateUrl: 'servico-pet.html',
})
export class ServicoPetPage {

  petshop: PetshopDTO;
  id = this.navParams.get('id');
  cliente: ClienteDTO;
  tipoServicos: TipoServicoDTO[];
  animais: AnimalDTO[];
  nomecliente: string;
  petEscolhido: AnimalDTO;
  servicoEscolhido: TipoServicoDTO;

  constructor(
          public navCtrl: NavController, 
          public navParams: NavParams,
          public PetshopService : PetshopService,
          public CienteService : ClienteService,
          public FuncionarioService : FuncionarioService
          
){ }

ionViewDidLoad() {
    this.CienteService.findById(1)// buscando um cliente padrão para simula~ção
    .subscribe(response =>{
      this.cliente = response;
      this.animais = this.cliente.animais;
      this.nomecliente = this.cliente.nome;  
      this.ionViewDidLoadbkp();   
    },
    error =>{
      console.log(error);
    });
  }

ChoosePet(pet)
{
  this.petEscolhido = pet
  this.getTipoServico();
}
  ionViewDidLoadbkp() {
    this.PetshopService.findById(this.id) 
    .subscribe(response =>{
      this.petshop = response;
    },
    error =>{
      console.log(error);
    });
  }

  mcqAnswer(animalEscolhido)
  {
    var animalid = animalEscolhido;
  }
  
  pageservice() {
  this.navCtrl.push('AgendaPage', {
  petshop: this.id,
  servico: this.servicoEscolhido,
  pet: this.petEscolhido
})}

ChooseService(Servico)
{
  this.servicoEscolhido = Servico;
  this.pageservice();
}
  getTipoServico()
  {
    var DescriptionServico = [];
    var idTipoServico=[];

    for (var i = 0; i < this.petshop.funcionarios.length; i++) { 
       for (var a = 0; a < this.petshop.funcionarios[i].tipoServico.length ; a++) { 
              DescriptionServico.push(this.petshop.funcionarios[i].tipoServico[a]);
  }
}    
this.tipoServicos = DescriptionServico;
this.tipoServicos = this.tipoServicos.filter((item) => {
        //if(item.funcionario == undefined )
          return (
             item.tipoanimal.some(g => g.id == this.petEscolhido.tipoAnimal.id)
            )
      })
  }

  
  
}
