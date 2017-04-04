import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OptComponent } from './opt.component';

import { DISOverviewRouting } from './distools.routing';
import { ViewerModule } from '../viewer/viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        DISOverviewRouting
    ],
    declarations: [
        OptComponent,
    ],
    providers: [
    ]
})

export class DISToolsModule {}