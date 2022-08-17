import { Produit } from "./produit"

export interface BurgerMenu {
        id?:number|null
        quantite:number
        prix:number
        burger:Produit|null

}
