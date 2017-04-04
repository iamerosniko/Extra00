import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MVComponent } from './mv.component';
import { DISOverviewRouting } from './disoverview.routing';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PhotoViewerModule,
        DISOverviewRouting
    ],
    declarations: [
        MVComponent
    ],
    providers: [
    ]
})

export class DISOverviewModule {}