import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TipoServicoDTO } from "../../models/TipoServico";
import { Observable } from "rxjs";
import {API_CONFIG} from "../../config/api.config";

@Injectable()
export class TipoServicoService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findAll() : Observable<TipoServicoDTO[]>
    {
        return this.http.get<TipoServicoDTO[]>(`${API_CONFIG.baseUrl}/tipoServico`);
    }
}