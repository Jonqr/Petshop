import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";
import { EnderecoDTO } from "../../models/Endereco";
import { FuncionarioDTO } from "../../models/Funcionario";
import { TipoServicoDTO } from "../../models/TipoServico";
import { TipoServicoService } from "../../services/domain/TipoServico.service";
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
 var geocoder;
 var address = "av capivari 1324 porto alegre rs";
@IonicPage()
@Component({
  selector: 'page-petshops',
  templateUrl: 'petshops.html',
})

export class PetshopsPage {
 map: any;
items: PetshopDTO[];
catPet : string;
servicos: TipoServicoDTO[];
className: string;
addres: EnderecoDTO[] =[];



  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
       private geolocation: Geolocation,
     public petshopService : PetshopService,
   
     ) {
  }


    
  // função chamando o serviço que consome api
  ionViewDidLoad() {
  
    this.petshopService.findAll()
    .subscribe(response =>{
      this.items = response;
            this.addmark();
    },
    error =>{
      console.log(error);
    });

  }


infoPet(value)
{
  this.catPet = value;
}

 getItems(ev) {
   var val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        //if(item.funcionario == undefined )
          return (
            item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
            item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
             item.funcionarios.some(g => g.tipoServico.some(t => t.description.toLowerCase().indexOf(val.toLowerCase()) > -1 && t.tipoanimal.some(ta => ta.id === this.catPet)))

            )
      })
    }
    else{this.ionViewDidLoad();}
  }


  pageservice(petshop) {
  this.navCtrl.push('ServicoPetPage', {
  id: petshop
 });
}


//api google maps
addmark() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 15,
          center: position
        }
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        const marker = new google.maps.Marker({
          position: position,
          map: this.map,
        });
        this.codeAddress(this.map);
         

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }



      codeAddress(map) {
        for(var x = 0; x<this.items.length; x++)
        {
          this.addres.push(this.items[x].endereco);
        }

        geocoder = new google.maps.Geocoder();
        for(var item of this.addres)
        {
          geocoder.geocode({'address': item.logradouro +" "+ item.numero+" "+item.cep+" RS " }, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
        }

      }
  
}
