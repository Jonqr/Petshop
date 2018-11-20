import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { AnimalDTO } from "../../models/Animal";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AnimalService{

    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.
    
    findAll() : Observable<AnimalDTO[]>
    {
        return this.http.get<AnimalDTO[]>(`${API_CONFIG.baseUrl}/animal`);
    }

    findById(id) : Observable<AnimalDTO[]>
    {
        return this.http.get<AnimalDTO[]>(`${API_CONFIG.baseUrl}/animal/`+id);
    }
}