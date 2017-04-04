import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { OptComponent } from './opt.component';

const photosampleRoutes: Routes = [
    //paths
    { path : 'opt', component: OptComponent },,
];

 @NgModule ({
     imports: [ RouterModule.forChild(photosampleRoutes) ],
     exports: [ RouterModule ]
 })

export class DISOverviewRouting {}