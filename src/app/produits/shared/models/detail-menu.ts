import { BurgerMenu } from "./burger-menu"
import { Produit } from "./produit"
import { TailleMenu } from "./taille-menu"

export interface DetailMenu {
    id?:number
    nom:string
    prix:number
    image:string
    burgerMenus:BurgerMenu[],
    portionFrite:Produit,
    tailleMenus:TailleMenu[]
    // boissons:[]
}
