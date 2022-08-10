import { Produit } from "./produit"

export interface TailleBoisson {
    id:number
    quantite:number
    boisson:Produit
    stock:number
    check:boolean
    qteCheck:number
    image:string
}
