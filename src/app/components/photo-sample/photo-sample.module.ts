import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoSampleComponent } from './photo-sample.component';

import { MyCommonModule } from '../common-components/mycommon.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MyCommonModule
    ],
    declarations: [
        PhotoSampleComponent
    ],
    providers: [
    ]
})

export class PhotoSampleModule {}