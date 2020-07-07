import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { ProductoRegistrado } from 'src/app/shared/ProductoRegistrado.model';
import { ProductoRegistradoService } from 'src/app/shared/producto-registrado.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];
  employeelist: ProductoRegistradoService[];

  constructor(private service: ImageService, private employe:ProductoRegistradoService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        console.log(list);
        this.imageList = list.map(item=> { return item.payload.val(); });
        console.log(this.imageList);
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length) )).keys());
        console.log(this.rowIndexArray);
      }
    );
  }
  
  onItemClick(emp: ProductoRegistrado) {
    console.log(emp)
    this.employe.selectedDespacho = Object.assign({}, emp);

  }
}
