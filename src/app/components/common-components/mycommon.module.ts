import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoViewerComponent } from './photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        
    ],
    declarations: [
        //SyncMainComponent,
        PhotoViewerComponent
    ],
    providers: [
    ]
})

export class MyCommonModule {}