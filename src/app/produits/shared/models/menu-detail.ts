import { DetailMenu } from "./detail-menu"
import { PortionFrite } from "./portion-frite"
import { TailleBoisson } from "./taille-boisson"

export interface MenuDetail {
    menu:DetailMenu,
    tailleBoissons:TailleBoisson[]
    portionFrites:PortionFrite[]
}
