import { EnderecoDTO } from "./Endereco";
import { FuncionarioDTO } from "./Funcionario";
import { TipoAnimalDTO } from "./TipoAnimal";

export interface TipoServicoDTO {
    id : string;
    description : string;
    tipoanimal : TipoAnimalDTO[];
}
