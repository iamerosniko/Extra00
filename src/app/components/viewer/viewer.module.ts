import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MyCommonModule } from '../common-components/mycommon.module';
import { PhotoViewerComponent } from './photo-viewer.component';
import { VideoViewerComponent } from './video-viewer.component';
import { PdfViewerComponent } from './pdf-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        
    ],
    declarations: [
        PhotoViewerComponent,
        VideoViewerComponent,
        PdfViewerComponent
    ],
    providers: [
    ],
    exports: [
        PhotoViewerComponent,
        VideoViewerComponent,
        PdfViewerComponent
    ] 
})

export class ViewerModule {}