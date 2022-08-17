import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../produits/shared/models/commande';

@Pipe({
  name: 'filterCommandeDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(commandes:Commande[], filterDate: string){
    if(commandes.length === 0 || filterDate === ""){
      return commandes
    }else{
        return commandes.filter(
          (commande)=>{
            return commande.date === filterDate
          }
      )
    }
  }

}
