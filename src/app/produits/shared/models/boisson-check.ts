import { Taille } from "./taille"

export interface BoissonCheck {     
    tailleId?:number
    boissonId?:number
    quantite:number
    taille?:Taille|null
}
