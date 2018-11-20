import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {API_CONFIG} from "../../config/api.config";
import { AgendaFuncionarioDTO } from "../../models/AgendaFuncionario";

@Injectable()
export class AgendaFuncionarioService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findAll() : Observable<AgendaFuncionarioDTO[]>
    {
        return this.http.get<AgendaFuncionarioDTO[]>(`${API_CONFIG.baseUrl}/agendaFuncionario`);
    }
}