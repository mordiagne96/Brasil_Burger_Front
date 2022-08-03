import { Taille } from "./taille"

export interface BoissonCheck {
    tailleId?:number|null
    boissonId?:number|null
    quantite:number
    taille?:Taille|null
}
