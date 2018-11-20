import { TipoAnimalDTO } from "./TipoAnimal";

export interface AnimalDTO {
    id : string;
    peso: string;
    nome: string;
    tamanho : string;
    tipoAnimal: TipoAnimalDTO;
    }
