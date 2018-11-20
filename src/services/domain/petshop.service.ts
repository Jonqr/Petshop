import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { PetshopDTO } from "../../models/Petshop";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PetshopService{

    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.
    
    findAll() : Observable<PetshopDTO[]>
    {
        return this.http.get<PetshopDTO[]>(`${API_CONFIG.baseUrl}/petshop`);
    }

    findById(id) : Observable<PetshopDTO>
    {
        return this.http.get<PetshopDTO>(`${API_CONFIG.baseUrl}/petshop/`+id);
    }
}