import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Despacho } from './despacho.model';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('despachados');
    console.log(this.imageDetailList);
  }

  insertImageDetails(imageDetails:Despacho) {
    this.imageDetailList=this.firebase.list('/despachados')
    console.log(imageDetails);
    this.imageDetailList.push(imageDetails);
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
}