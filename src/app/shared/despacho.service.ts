import { Injectable } from '@angular/core';
import { Despacho } from './despacho.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class DespachoService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Despacho = new Despacho();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('hermes');
    return this.employeeList;
  }

  insertEmployee(empoloyee: Despacho) {
    this.employeeList.push({
      nombre: empoloyee.nombre,
      direccion: empoloyee.direccion,
      telefono: empoloyee.telefono,
      pedido: empoloyee.pedido,
      despachado:empoloyee.despachado
    });
  }

  updateEmployee(emp: Despacho) {
    this.employeeList.update(emp.$key, {
      nombre: emp.nombre,
      direccion: emp.direccion,
      telefono: emp.telefono,
      pedido: emp.pedido,
      despachado:emp.despachado
    });
  }

  deleteEmployee(key: string) {
    this.employeeList.remove(key);
  }

}