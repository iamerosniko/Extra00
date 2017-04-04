import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
//import { SynchronizationModule } from './components/synchronization/sync.module';
import { DISOverviewModule } from './components/03-disoverview/disoverview.module';
import { DISToolsModule } from './components/05-dis-tools/distools.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , 
                  //SynchronizationModule, 
                  DISOverviewModule,
                  DISToolsModule,
                  AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
