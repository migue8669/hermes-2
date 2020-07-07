import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ProductoRegistradoService } from "src/app/shared/producto-registrado.service";
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"],
})
export class ProductosComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    $key: new FormControl(""),
    nombre: new FormControl(""),
    precio: new FormControl(""),
    imgUrl: new FormControl(""),
  });

  constructor(
    private storage: AngularFireStorage,
     public service: ProductoRegistradoService
    //public service: ImageService

    ) {}

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = "/assets/img/image_placeholder.jpg";
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    console.log(formValue);
    if (formValue.$key == null || formValue.$key == undefined) {
      this.service.insertImageDetails(formValue);
    } else {
      this.service.updateEmployee(formValue);
  }

    this.resetForm();
  }

  // this.isSubmitted = true;
  // if (this.formTemplate.valid) {
  //   var filePath = `${formValue.nombre}_${new Date().getTime()}`;
  //   const fileRef = this.storage.ref(filePath);
  //   this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef.getDownloadURL().subscribe((url) => {
  //         formValue['imageUrl'] = url;
  //  this.service.insertImageDetails(formValue);
  //   this.resetForm();
  // })
  //     })
  //   ).subscribe();
  // }

  get formControls() {
    return this.formTemplate["controls"];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      $key: null,
      nombre: "",
      precio: "",
      imgUrl: "",
 
    });
    this.imgSrc = "/assets/img/image_placeholder.jpg";
    this.selectedImage = null;
    this.isSubmitted = false;
  }
  onDelete(form:NgForm ) {
    console.log(form.value);
    if (confirm('Are you sure to delete this record ?') === true) {
      this.service.deleteEmployee(form.value.$key);
      this.resetForm();
    }
  }
}
