import { BoissonQuantite } from "./boisson-quantite"
import { Produit } from "./produit"

export interface TailleBoissonCheck {
    idTaille?:number|null
    quantite:number
    boissonQuantites?:BoissonQuantite[]|null
}
