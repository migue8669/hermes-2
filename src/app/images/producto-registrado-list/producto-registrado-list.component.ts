import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductoRegistradoService } from 'src/app/shared/producto-registrado.service';
import { ProductoRegistrado } from 'src/app/shared/ProductoRegistrado.model';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-producto-registrado-list',
  templateUrl: './producto-registrado-list.component.html',
  styleUrls: ['./producto-registrado-list.component.css']
})
export class ProductoRegistradoListComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];
  employeelist: ProductoRegistrado[];

  constructor(private service: ImageService, private employeeService: ProductoRegistradoService) { }
//   ngOnInit() {

//    this.employeeService.getImageDetailList().snapshotChanges().subscribe(
//   list => {
//     console.log(list);
//     this.imageList = list.map(item=> { return  (item.key,item.payload.val());
//    });
//     console.log(this.imageList);
//     this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length) )).keys());
//     console.log(this.rowIndexArray);
//   }
// //)
// );
//   }
  
//   onItemClick(emp: ProductoRegistrado) {
//     console.log(emp)
//     this.employeeService.selectedDespacho = Object.assign({}, emp);

//   }}
  ngOnInit() {
    const x = this.employeeService.getImageDetailList();
    x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeelist.push(y as ProductoRegistrado);
        console.log(y)

      });
    });
  }
    onItemClick(emp: ProductoRegistrado) {
      console.log(emp)
      this.employeeService.selectedDespacho = Object.assign({}, emp);
    }

   }
  
  // ngOnInit() {
  //   this.service.imageDetailList.snapshotChanges().subscribe(
  //     list => {
  //       console.log(list);
  //       this.imageList = list.map(item=> { return item.payload.val(); });
  //       console.log(this.imageList);
  //       this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length) )).keys());
  //       console.log(this.rowIndexArray);
  //     }
  //   );
  // }

