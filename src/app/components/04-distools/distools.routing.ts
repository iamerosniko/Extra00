import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { OptComponent } from './opt.component';
import { KhronosComponent } from './khronos.component';
import { WorkdayComponent } from './workday.component';
import { ContactsComponent } from './contacts.component';
const routes: Routes = [
    //paths
    { path : 'opt', component: OptComponent },
    { path : 'khronos', component: KhronosComponent },
    { path : 'workday', component: WorkdayComponent },
    { path : 'contacts', component: ContactsComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class DISToolsRouting {}
