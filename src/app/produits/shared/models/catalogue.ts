import { Produit } from "./produit";
import { TailleBoisson } from "./taille-boisson";
import { Taille } from "./taille";

export interface Catalogue {
    burgers:Produit[],
    menus:Produit[],
    frites:Produit[],
    tailleBoissons:TailleBoisson[],
    tailles:Taille[]
}
