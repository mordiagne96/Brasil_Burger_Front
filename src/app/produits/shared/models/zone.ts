import { Quartier } from "./quartier";

export interface Zone {

    id:number,
    nom: string,
    prix:number,
    quartiers:Quartier[]
    
}
