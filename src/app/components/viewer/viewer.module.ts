import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MyCommonModule } from '../common-components/mycommon.module';

import { PDFComponent } from './pdf-viewer.component';
import { PhotoViewerComponent } from './photo-viewer.component';
import { VideoViewerComponent } from './video-viewer.component';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
@NgModule({
    imports: [
        
        CommonModule,
        FormsModule,
        LazyLoadImageModule
    ],
    declarations: [
        PDFComponent,
        PhotoViewerComponent,
        VideoViewerComponent,
    ],
    providers: [
    ],
    exports: [
        PDFComponent,
        PhotoViewerComponent,
        VideoViewerComponent,
    ] 
})

export class ViewerModule {}