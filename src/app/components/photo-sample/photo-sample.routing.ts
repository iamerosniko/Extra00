import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { PhotoSampleComponent } from './photo-sample.component';
const photosampleRoutes: Routes = [
    //paths
    { path : 'viewphoto', component: PhotoSampleComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(photosampleRoutes) ],
     exports: [ RouterModule ]
 })

export class PhotoSampleRouting {}