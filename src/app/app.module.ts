import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
//import { SynchronizationModule } from './components/synchronization/sync.module';
import { PhotoSampleModule } from './components/photo-sample/photo-sample.module';
import { VideoSampleModule } from './components/video-sample/video-sample.module';
import { DISOverviewModule } from './components/03-disoverview/disoverview.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , 
                  //SynchronizationModule, 
                  DISOverviewModule,
                  PhotoSampleModule,
                  VideoSampleModule,
                  AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
