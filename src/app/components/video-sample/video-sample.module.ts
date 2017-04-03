import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoSampleComponent } from './video-sample.component';
import { VideoSampleRouting } from './video-sample.routing';
//import { PhotoViewerComponent } from '../common-components/photo-viewer.component';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        //MyCommonModule,
        PhotoViewerModule,
        VideoSampleRouting
    ],
    declarations: [
        //PhotoViewerComponent,
        VideoSampleComponent
    ],
    providers: [
    ]
})

export class VideoSampleModule {}