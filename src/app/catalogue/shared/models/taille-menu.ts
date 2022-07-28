import { Produit } from "./produit"
import { Taille } from "./taille"

export interface TailleMenu {
    id?:number
    quantite:number
    taille:Taille
}
