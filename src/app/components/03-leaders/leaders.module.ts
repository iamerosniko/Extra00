import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TLComponent } from './tl.component';
import { AVPComponent } from './avp.component';
import { LeadersRouting } from './leaders.routing';
import { ViewerModule } from '../viewer/viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        LeadersRouting
    ],
    declarations: [
        TLComponent,
        AVPComponent,
    ],
    providers: [
    ]
})

export class LeadersModule {}
