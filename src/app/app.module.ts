import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
//import { SynchronizationModule } from './components/synchronization/sync.module';
import { PhotoSampleModule } from './components/photo-sample/photo-sample.module';
import { VideoSampleModule } from './components/video-sample/video-sample.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , 
                  //SynchronizationModule, 
                  PhotoSampleModule,
                  VideoSampleModule,
                  AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
