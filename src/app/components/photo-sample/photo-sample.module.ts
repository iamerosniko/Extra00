import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoSampleComponent } from './photo-sample.component';
import { PhotoSampleRouting } from './photo-sample.routing';
import { MyCommonModule } from '../common-components/mycommon.module';
import { PhotoViewerComponent } from '../common-components/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        //MyCommonModule,
        PhotoSampleRouting
    ],
    declarations: [
        PhotoViewerComponent,
        PhotoSampleComponent
    ],
    providers: [
    ]
})

export class PhotoSampleModule {}