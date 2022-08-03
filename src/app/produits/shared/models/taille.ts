import { TailleBoisson } from "./taille-boisson"

export interface Taille {
    id?:number
    prix:number
    libelle:number
    tailleBoissons?:TailleBoisson[]
}
