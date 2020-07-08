import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { RegistroService } from 'src/app/shared/registro.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from 'src/app/shared/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
   // precio: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
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
      var filePath = `${formValue.nombre}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetailsH(formValue);
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
   //   precio: '',
      imageUrl: '',
      nombre: ''
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
