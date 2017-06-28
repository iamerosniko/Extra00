import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { TeamOrgComponent } from './team-org.component';
import { TeamAppsComponent } from './team-apps.component';
import { TeamServicesComponent } from './team-services.component';

const routes: Routes = [
    //paths
    { path : 'Team-Org', component: TeamOrgComponent },
    { path : 'Team-Apps', component: TeamAppsComponent },
    { path : 'Team-Services', component: TeamServicesComponent },

];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class TeamRouting {}
