import { Produit } from "./produit"

export interface BurgerMenu {
    id?:number
    quantite:number
    prix:number
    burger:Produit

}
