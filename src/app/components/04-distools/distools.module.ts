import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OptComponent } from './opt.component';
import { KhronosComponent } from './khronos.component';
import { WorkdayComponent } from './workday.component';
import { ContactsComponent } from './contacts.component';

import { ViewerModule } from '../viewer/viewer.module';
import { DISToolsRouting } from './distools.routing';
/* ngx-bootstrap */
import { CarouselModule } from 'ngx-bootstrap';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CarouselModule.forRoot(),
        ViewerModule,
        DISToolsRouting
    ],
    declarations: [
        OptComponent,
        KhronosComponent,
        WorkdayComponent,
        ContactsComponent
    ],
    providers: [
    ]
})

export class DISToolsModule {}
