import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('productoHermes/productos');
    return this.imageDetailList;
    console.log(this.imageDetailList);
  }

  // insertImageDetails(imageDetails) {
  //   this.imageDetailList.push(imageDetails);
  // }

  insertImageDetails(imageDetails) {
    this.imageDetailList=this.firebase.list('/productoHermes/productos')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre,
      precio:imageDetails.precio,
      imgUrl:imageDetails.imgUrl
 });
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
  updateEmployee(emp) {
    this.imageDetailList=this.firebase.list('/productoHermes/productos')

    this.imageDetailList.update(emp.$key, {
      nombre: emp.nombre,
      precio:emp.precio,
      imgUrl:emp.imgUrl
    });
  }
  getImageDetailListH() {
    this.imageDetailList = this.firebase.list('productoHermes');
    console.log(this.imageDetailList);
  }



  insertImageDetailsH(imageDetails) {
    this.imageDetailList=this.firebase.list('/productoHermes')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre,
      // precio:imageDetails.precio,
      imageUrl:imageDetails.imageUrl
 });
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
  updateEmployeeH(emp) {
    this.imageDetailList=this.firebase.list('/productoHermes')

    this.imageDetailList.update(emp.$key, {
      nombre: emp.nombre,
      // precio:emp.precio,
      imageUrl:emp.imageUrl
    });
  }



  getImageDetailListHS() {
    this.imageDetailList = this.firebase.list('productoHermes');
    console.log(this.imageDetailList);
  }



  insertImageDetailsHS(imageDetails) {
    this.imageDetailList=this.firebase.list('/productoHermes')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre,
      // precio:imageDetails.precio,
      imageUrl:imageDetails.imageUrl
 });
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
  updateEmployeeHS(emp) {
    this.imageDetailList=this.firebase.list('/productoHermes')

    this.imageDetailList.update(emp.$key, {
      nombre: emp.nombre,
      // precio:emp.precio,
      imageUrl:emp.imageUrl
    });
  }
}