import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { DespachoService } from 'src/app/shared/despacho.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from 'src/app/shared/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-registroo',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    precio: new FormControl('', Validators.required),
    nombre: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service: ImageService) { }

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
    console.log(formValue);
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.precio}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      precio: '',
      imageUrl: '',
      nombre: ''
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}

//   constructor(public employeeService: DespachoService) { }

//   ngOnInit() {
//     this.resetForm();
//   }


//   onSubmit(form: NgForm) {
//      if (form.value.$key == null) {
//        this.employeeService.insertEmployee(form.value);
//      } else {
//       this.employeeService.updateEmployee(form.value);
//      }
//     this.resetForm(form);
//   }

//   resetForm(form?: NgForm) {
//     if (form != null) {
//       form.reset();
//     }
//     this.employeeService.selectedEmployee = {
//       $key: null,
//       nombre: '',
//       direccion: '',
//       telefono: '',
//       pedido:'',
//       despachado: ''
//     };
//   }

//   onDelete(form: NgForm) {
//     if (confirm('Are you sure to delete this record ?') === true) {
//       this.employeeService.deleteEmployee(form.value.$key);
//       this.resetForm(form);
//     }
//   }
// }
