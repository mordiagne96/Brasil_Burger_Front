import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../produits/shared/models/commande';

@Pipe({
  name: 'filterTypeCommande'
})
export class FilterTypeCommandePipe implements PipeTransform {

  transform(commandes:Commande[], typeLivraison:string) {
    if(commandes.length === 0 || typeLivraison == ''){
      return commandes
    }else{
      return commandes.filter(
          (commande)=>{
            if(typeLivraison.toLowerCase() == "sur place"){
                  return commande.zone == null
            }
            else{
              return commande.zone != null
            }
          }
      )
    }
}


}
