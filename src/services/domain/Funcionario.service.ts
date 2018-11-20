import * as core from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { FuncionarioDTO } from "../../models/Funcionario";
import { Observable } from "rxjs/Rx";

@core.Injectable()
export class FuncionarioService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findAll() : Observable<FuncionarioDTO[]>
    {
        return this.http.get<FuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionario`);
    }

     findAllById(id) : Observable<FuncionarioDTO>
    {
        return this.http.get<FuncionarioDTO>(`${API_CONFIG.baseUrl}/funcionario/`+id);
    }
}