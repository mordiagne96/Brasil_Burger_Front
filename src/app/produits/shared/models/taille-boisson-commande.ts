import { TailleBoisson } from "./taille-boisson";

export interface TailleBoissonCommande {
    tailleBoisson:TailleBoisson|null
    quantite:number
}
