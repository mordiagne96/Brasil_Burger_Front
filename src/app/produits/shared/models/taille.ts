import { TailleBoisson } from "./taille-boisson"

export interface Taille {
    id?:number|undefined|null
    prix?:number
    libelle?:string
    tailleBoissons?:TailleBoisson[]
}
