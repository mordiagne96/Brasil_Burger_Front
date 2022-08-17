import { Produit } from "./produit"
import { Taille } from "./taille"

export interface TailleMenu {
    id?:number|null
    quantite:number
    taille:Taille|null
}
