import { Pipe, PipeTransform } from '@angular/core';
import { Livraison } from 'src/app/produits/shared/models/livraison';


@Pipe({
  name: 'filterLivraisonEtat'
})
export class FilterLivraisonEtatPipe implements PipeTransform {

  transform(livraisons:Livraison[], filterEtat: string){
    if(livraisons.length === 0 || filterEtat === ""){
      return livraisons
    }else{
        return livraisons.filter(
          (livraison)=>{
            return livraison.etat?.toLowerCase() == filterEtat.toLowerCase()
          }
      )
    }
  }

}
