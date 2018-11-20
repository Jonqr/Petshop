import { AnimalDTO } from "./Animal";

export interface ClienteDTO {
    id : string;
    nome: string;
    email: string;
    telefones: string[];
    animais: AnimalDTO[];
}

