import { NumeroTelephoneService } from './../services/numero-telephone.service';
import { AbstractControl } from '@angular/forms';


export function ValidatorNumero(control: AbstractControl, service: NumeroTelephoneService) {
    service.verifyNumeroTelephone(control.value).subscribe(
        {
            next:data=>{
                console.log(data)
                return { invalidUrl: true };


                // if(data.valid == true){
                //     return null
                // }else{
                //     return { invalidUrl: true };
                // }
            },
            error:error=>{
                return { invalidUrl: true };
            }

        }
    )

//   if (control.value == "ok") {
//     return { invalidUrl: true };
//   }
  
//   return null;
}