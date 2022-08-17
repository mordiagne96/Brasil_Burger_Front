import { BurgerMenu } from "./burger-menu"
import { Produit } from "./produit"
import { TailleMenu } from "./taille-menu"

export interface DetailMenu {
    id?:number|null
    nom:string
    prix:number
    image:string
    burgerMenus:BurgerMenu[],
    portionFrite:Produit|null,
    tailleMenus:TailleMenu[],
    file:File|null
    // boissons:[]
}
