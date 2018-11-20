import * as core from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { EnderecoDTO } from "../../models/Endereco";
import { Observable } from "rxjs/Rx";

@core.Injectable()
export class EnderecoService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findAll() : Observable<EnderecoDTO[]>
    {
        return this.http.get<EnderecoDTO[]>(`${API_CONFIG.baseUrl}/endereco`);
    }
}