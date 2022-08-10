import { DetailMenu } from "./detail-menu";
import { MenuCommandeTailleBoisson } from "./menu-commande-taille-boisson";

export interface MenuCommande {
    quantite: number,
    menu:DetailMenu|null|undefined,
    tailleBoissons: MenuCommandeTailleBoisson []
}
