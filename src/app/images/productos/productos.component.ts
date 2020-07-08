import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { FormGroup, FormControl, NgForm, Validators } from "@angular/forms";
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
  isHidden: boolean = true;
  isHidden2: boolean = true;
  disabled:boolean;

  botonProducto:string="Nuevo Producto";

  formTemplate = new FormGroup({
    $key: new FormControl(""),
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
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
    this.isSubmitted = true;

    if (formValue.$key == null || formValue.$key == undefined) {
      this.service.insertImageDetails(formValue);
    } else {
      this.service.updateEmployee(formValue);
  }

    this.resetForm();
  }
cambioEstadoPaneles(estado){
  estado=!estado;
  console.log(estado)
  this.isHidden=estado;
  this.isHidden2=estado;
  if(this.isHidden==true){
    this.botonProducto="Nuevo Producto"
  }else{
    this.botonProducto="Lista de productos"

  }
}

  get formControls() {
    return this.formTemplate["controls"];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      $key: null,
      nombre: "",
      precio: "",
      imageUrl: "",
 
    });
    this.imgSrc = "/assets/img/image_placeholder.jpg";
    this.selectedImage = null;
    this.isSubmitted = false;
  }
  onDelete(form:NgForm ) {
    console.log(form.value);
    if (confirm('Está seguro de eliminar el registro?') === true) {
      this.service.deleteEmployee(form.value.$key);
      this.resetForm();
    }
  }
}
