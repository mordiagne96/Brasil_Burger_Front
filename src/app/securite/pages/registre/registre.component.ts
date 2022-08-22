import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  show: boolean = false

  constructor() { }


  ngOnInit(): void {
  }

  showAlert(data:any){
   if(data == true){
      this.show = true
      setTimeout(()=>{
        this.show =false
      }, 5000)
   }else{
    this.show = false
   }
  }

}
