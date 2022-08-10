import { DetailMenu } from "./detail-menu";
import { TailleBoissonCheck } from "./taille-boisson-check";

export interface MenuPanier {
    menu?:DetailMenu|null|undefined
    tailleBoissonCheck:TailleBoissonCheck[]
    quantite:number
}
