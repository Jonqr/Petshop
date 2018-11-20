import { TipoAnimalDTO } from '../../models/TipoAnimal';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class TipoAnimalService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findAll() : Observable<TipoAnimalDTO[]>
    {
        return this.http.get<TipoAnimalDTO[]>(`${API_CONFIG.baseUrl}/tipoAnimal`);
    }
}