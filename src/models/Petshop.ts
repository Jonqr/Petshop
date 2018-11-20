

import { EnderecoDTO } from "./Endereco";
import { funcionariospet } from "./funcionarios-pet";
import { FuncionarioDTO } from "./Funcionario";


export interface PetshopDTO {
    id : string;
    nome : string;
    cnpj : string;
    endereco : EnderecoDTO;
    funcionarios : FuncionarioDTO[];
}