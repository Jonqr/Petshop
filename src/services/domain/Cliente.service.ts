import * as core from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/Cliente";

@core.Injectable()
export class ClienteService{


    constructor(public http:HttpClient){

    }

    // função para consumir a api, API_CONFIG.baseUrl foi onde guardei o endereço da api la no config.

    findById(id) : Observable<ClienteDTO>
    {
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/`+id);
    }
}