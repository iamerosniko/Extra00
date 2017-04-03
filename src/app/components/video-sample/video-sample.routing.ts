import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { VideoSampleComponent } from './video-sample.component';
const videosampleRoutes: Routes = [
    //paths
    { path : 'viewvideo', component: VideoSampleComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(videosampleRoutes) ],
     exports: [ RouterModule ]
 })

export class VideoSampleRouting {}