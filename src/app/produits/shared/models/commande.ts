import { BurgerPanier } from "./burger-panier"
import { MenuCommande } from "./menu-commande"
import { PortionFriteCommande } from "./portion-frite-commande"
import { Zone } from "./zone"
import { TailleBoissonCommande } from "./taille-boisson-commande"

export interface Commande {
    id?:number|null,
    numeroCommande?:string|null,
    date?:string|null,
    montant?:string|null,
    etat?:string|null,
    tailleBoissonCommandes?: TailleBoissonCommande [],
    zone?:Zone|null,
    burgerCommandes?: BurgerPanier[],
    menuCommandeTailleBoissons?: MenuCommande[],
    portionFriteCommandes?: PortionFriteCommande[],
    client?:any
}
