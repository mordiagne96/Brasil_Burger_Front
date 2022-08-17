import { PortionFrite } from 'src/app/produits/shared/models/portion-frite';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BurgerMenu } from './../../produits/shared/models/burger-menu';
import { Produit } from './../../produits/shared/models/produit';
import { DetailMenu } from './../../produits/shared/models/detail-menu';
import { Injectable } from '@angular/core';
import { TailleMenu } from '../../produits/shared/models/taille-menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu:DetailMenu={
    id:null,nom:"",prix:0,image:"",burgerMenus:[],portionFrite:null,tailleMenus:[],file:null
  }
  private url_back:string = "http://localhost:8000/api/";

  constructor(private http:HttpClient) { }

  addBurger(burgerMenu:BurgerMenu){

    if(this.menu?.burgerMenus.length == 0){
      this.menu.burgerMenus.push(burgerMenu);
    }else{

      let object = this.menu?.burgerMenus.find((obj) => {
        return obj.burger?.id === burgerMenu.burger?.id;
      });

      if(object == null){
          this.menu?.burgerMenus.push(burgerMenu);
      }else{
          this.menu?.burgerMenus.map(
            (obj)=>{
              if(obj.burger?.id == burgerMenu.burger?.id){
                obj.quantite = burgerMenu.quantite
              }
            }
          )
      }

    }
  }

  addPortion(portion:Produit){
     this.menu!.portionFrite = portion
  }

  addTaille(tailleMenu:TailleMenu){
    if(this.menu?.tailleMenus.length == 0){
      this.menu?.tailleMenus.push(tailleMenu)
    }else{
      let object = this.menu?.burgerMenus.find((obj) => {
        return obj.burger?.id === tailleMenu.taille?.id;
      });

      if(object == null){
          this.menu?.tailleMenus.push(tailleMenu);
      }else{
          this.menu?.burgerMenus.map(
            (obj)=>{
              if(obj.burger?.id == tailleMenu.taille?.id){
                obj.quantite = tailleMenu.quantite
              }
            }
          )
      }
    }
  }


  addMenu(token:string): Observable<any>{
    // alert("ok")
        let httpOptions = {
          headers: new HttpHeaders({
            // 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          })
        }
        let data = this.convertFormat()
        // console.log(data.burgerMenus);
        
        const formData = new FormData();  
        formData.append('burgerMenus', JSON.stringify(data.burgerMenus))
        formData.append('portionFrite', JSON.stringify(data.portionFrite))
        formData.append('tailleMenus', JSON.stringify(data.tailleMenus))
        formData.append('nom', data.nom)
        formData.append('file', data.file)
        // console.log(menuFormData.get('burgerMenus'))
        return this.http.post<any>(this.url_back + 'menus', formData as FormData, httpOptions)
  }
  
  isValid(){
    if(this.menu?.burgerMenus.length != 0 && this.menu?.tailleMenus.length != 0 && this.menu?.portionFrite != null){
      return true;
    }
    return false;
  }

  removeBurger(burgerMenu:BurgerMenu){
    let indexOfObject :number|undefined = this.menu?.burgerMenus.findIndex((object) => {
      return object.burger?.id === burgerMenu.burger?.id
    });
    
    if (indexOfObject !== -1) {
      this.menu?.burgerMenus.splice(Number(indexOfObject), 1);
    }
  }

  removeTaille(tailleMenu:TailleMenu){
    let indexOfObject :number|undefined = this.menu?.tailleMenus.findIndex((object) => {
      return object.taille?.id === tailleMenu.taille?.id
    });
    
    if (indexOfObject !== -1) {
      this.menu?.tailleMenus.splice(Number(indexOfObject), 1);
    }
  }
  addNomMenu(nom:string){
    this.menu!.nom = nom
  }

  addFile(file:File){
    this.menu!.file = file
  }

  convertFormat(){
      // console.log(this.menu.file?.name)
      let object:any={
        burgerMenus:[],
        tailleMenus:[],
        portionFrite:{
          id:this.menu.portionFrite?.id
        },
        file:this.menu.file,
        nom:this.menu.nom
      }
      let burgerMenus:any =[]
      let tailleMenus:any = []
      this.menu.burgerMenus.map(
          (data)=>{
            let obj={
              quantite:data.quantite,
              burger:{
                id:data.burger?.id
              }
            }
            object.burgerMenus.push(obj)
          }
      ) 
      this.menu.tailleMenus.map(
          (data)=>{
            let obj={
                taille:{
                  id:data.taille?.id
                },
                quantite:data.quantite
            }
            object.tailleMenus.push(obj)
          }
      )
      // console.log(burgerMenus)
      return object
  }
}
