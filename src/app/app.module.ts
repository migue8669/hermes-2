import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
 import { AngularFireStorageModule } from "@angular/fire/storage";
 import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from "@angular/forms";
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from '@angularfire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { environment } from "../environments/environment";
import { RegistroComponent } from './images/registro/registro.component.';
import { DespachoComponent } from './images/despacho/despacho.component';
import { DespachoListComponent } from './images/despacho-list/despacho-list.component';
import { ProductosComponent } from './images/productos/productos.component';
import { ProductoRegistradoListComponent } from './images/producto-registrado-list/producto-registrado-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    RegistroComponent,
    DespachoComponent,
    DespachoListComponent,
    ProductosComponent,
    ProductoRegistradoListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
