import { Component, OnInit } from '@angular/core';
import { DespachoService } from 'src/app/shared/despacho.service';
import { Despacho } from 'src/app/shared/despacho.model';

@Component({
  selector: 'app-despacho-list',
  templateUrl: './despacho-list.component.html',
  styleUrls: ['./despacho-list.component.css']
})
export class DespachoListComponent implements OnInit {
  employeelist: Despacho[];
  constructor(private employeeService: DespachoService) { }

  ngOnInit() {
    const x = this.employeeService.getImageDetailList();
    x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeelist.push(y as Despacho);
      });
    });

  }

  onItemClick(emp: Despacho) {
    this.employeeService.selectedDespacho = Object.assign({}, emp);

  }
}
