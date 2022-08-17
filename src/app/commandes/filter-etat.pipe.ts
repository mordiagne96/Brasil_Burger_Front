import { Commande } from 'src/app/produits/shared/models/commande';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterCommande'
})
export class FilterEtatPipe implements PipeTransform {

  transform(commandes:Commande[], filterEtat: string) {
    if(commandes.length === 0 || filterEtat === ""){
        return commandes
    }else{
        return commandes.filter(
          (commande)=>{
            return commande.etat?.toLowerCase() == filterEtat.toLowerCase()
          }
      )
    }
  }

}
