import { Taille } from "./taille";
import { Produit } from "./produit"


export interface MenuCommandeTailleBoisson {
    taille?:Taille|null,
    quantite:number,
    boisson?:Produit|null
}

