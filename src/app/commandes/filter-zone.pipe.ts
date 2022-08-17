import { Commande } from 'src/app/produits/shared/models/commande';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterZoneCommande'
})
export class FilterZonePipe implements PipeTransform {

  transform(commandes:Commande[], filterZone:string) {
      if(commandes.length === 0 || filterZone == ''){
        return commandes
      }else{
        return commandes.filter(
            commande=>{
              return commande.zone?.nom.toLowerCase() == filterZone.toLowerCase()
            }
        )
      }
  }

}
