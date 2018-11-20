import { PetshopDTO } from "./Petshop";
import { TipoServicoDTO } from "./TipoServico";

export interface FuncionarioDTO {
    id : string;
    nome : string;
    tipoServico: TipoServicoDTO[];
}