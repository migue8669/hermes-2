import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from 'src/app/shared/image.service';
import { DespachoService } from 'src/app/shared/despacho.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {

  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
 disabled:boolean;
  formTemplate = new FormGroup({
     $key:new FormControl(''),
     nombre: new FormControl(''),
     direccion: new FormControl(''),
     telefono: new FormControl(''),
     pedido: new FormControl(''),
     despachado: new FormControl(''),

  })

  constructor(private storage: AngularFireStorage, public service: DespachoService) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
   console.log(formValue.$key);
   if (formValue.$key == null) {
    this.service.insertImageDetails(formValue);
  } else {
   this.service.updateEmployee(formValue);
  }

 this.resetForm();
}



  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      $key : null,
      nombre: '',
      direccion: '',
      telefono: '',
      pedido: '',
      despachado: ''
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  onDelete(form) {
    console.log(form.value);
    if (confirm('Are you sure to delete this record ?') === true) {
      this.service.deleteEmployee(form.value.$key);
      this.resetForm();
    }
  }
     
}
