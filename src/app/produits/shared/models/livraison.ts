import { Commande } from "./commande"

export interface Livraison {
    id?:number|null
    montantTotal?:number
    date?:string|null
    commandes?:Commande[]
    livreur?:any
    etat?:string|null
}
