import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Despacho } from './despacho.model';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  imageDetailList: AngularFireList<any>;
  selectedDespacho: Despacho = new Despacho();

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('despachados');
    return this.imageDetailList;

    console.log(this.imageDetailList);
  }

  insertImageDetails(imageDetails:Despacho) {
    this.imageDetailList=this.firebase.list('/despachados')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre,
      direccion: imageDetails.direccion,
      telefono: imageDetails.telefono,
      pedido: imageDetails.pedido,
      despachado:imageDetails.despachado});
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
  updateEmployee(emp: Despacho) {
    this.imageDetailList=this.firebase.list('/despachados')

    this.imageDetailList.update(emp.$key, {
      nombre: emp.nombre,
      direccion: emp.direccion,
      telefono: emp.telefono,
      pedido: emp.pedido,
      despachado:emp.despachado
    });
  }
  deleteEmployee(key: string) {
    this.imageDetailList.remove(key);
  }


}