import { Injectable } from '@angular/core';
import { ProductoRegistrado } from './ProductoRegistrado.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductoRegistradoService {
  imageDetailList: AngularFireList<any>;
  selectedDespacho: ProductoRegistrado = new ProductoRegistrado();

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('productoHermes');
 //   console.log(this.imageDetailList);
    return this.imageDetailList;
        console.log(this.imageDetailList);

  } //   console.log(this.imageDetailList);


//   insertImageDetails(imageDetails) {
//     this.imageDetailList.push(imageDetails);
//   }
// }
//    getImageDetailList() {
//     this.imageDetailList = this.firebase.list('productos');
//    // return this.imageDetailList;

//     console.log(this.imageDetailList);
//   }

  insertImageDetails(imageDetails) {
    this.imageDetailList=this.firebase.list('/productoHermes')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre,
      precio:imageDetails.precio,
      imageUrl:imageDetails.imageUrl
 });
    // this.imageDetailList.push(nombre:imageDetails.nombre,direccion:imageDetails.direccion,telefono:imageDetails.telefono,pedido:imageDetails.pedido,despachado:imageDetails.despachado);
  }
  updateEmployee(emp) {
    this.imageDetailList=this.firebase.list('/productoHermes')

    this.imageDetailList.update(emp.$key, {
      nombre: emp.nombre,
      precio:emp.precio,
      imageUrl:emp.imageUrl
    });
  }

  deleteEmployee(key: string) {
    this.imageDetailList.remove(key);
  }




}