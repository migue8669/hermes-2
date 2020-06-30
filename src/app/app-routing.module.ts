import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespachoComponent } from './images/despacho/despacho.component';

const routes: Routes = [
  { path: '', redirectTo: 'image/despacho', pathMatch: 'full' },
  {
    path: 'image', component: ImagesComponent, children: [
      { path: 'upload', component: ImageComponent },
      { path: 'list', component: ImageListComponent },
      { path: 'despacho', component: DespachoComponent }

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
