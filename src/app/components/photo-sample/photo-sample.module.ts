import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoSampleComponent } from './photo-sample.component';
import { PhotoSampleRouting } from './photo-sample.routing';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PhotoViewerModule,
        //MyCommonModule,
        PhotoSampleRouting
    ],
    declarations: [
        //PhotoViewerComponent,
        PhotoSampleComponent
    ],
    providers: [
    ]
})

export class PhotoSampleModule {}