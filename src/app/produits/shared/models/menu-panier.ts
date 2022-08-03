import { DetailMenu } from "./detail-menu";
import { TailleBoissonCheck } from "./taille-boisson-check";

export interface MenuPanier {
    menu?:DetailMenu|null
    tailleBoissonCheck:TailleBoissonCheck[]
    quantite:number
}
