import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { TLComponent } from './tl.component';
import { AVPComponent } from './avp.component';

import { ManagerComponent } from './manager.component';
const routes: Routes = [
    //paths
    { path : 'Team-Leader', component: TLComponent },
    { path : 'Manager', component: AVPComponent },
    { path : 'AVP', component: AVPComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class LeadersRouting {}
