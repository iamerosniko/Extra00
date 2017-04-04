import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { MVComponent } from './mv.component';
const photosampleRoutes: Routes = [
    //paths
    { path : 'mission-vision', component: MVComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(photosampleRoutes) ],
     exports: [ RouterModule ]
 })

export class DISOverviewRouting {}