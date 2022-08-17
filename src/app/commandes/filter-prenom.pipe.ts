import { Commande } from 'src/app/produits/shared/models/commande';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClientCommande'
})
export class FilterPrenomPipe implements PipeTransform {

  transform(commandes:Commande[], filterPrenom:string) {
    if(commandes.length === 0 || filterPrenom == ''){
      return commandes
    }else{
      return commandes.filter(
          commande=>{
            return commande.client.nom.toLowerCase() == filterPrenom.toLowerCase()
          }
      )
    }
  }

}
