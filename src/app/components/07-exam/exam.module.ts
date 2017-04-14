import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamComponent } from './exam.component';
import { ExamRouting } from './exam.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ExamRouting
    ],
    declarations: [
        ExamComponent
    ],
    providers: [
    ]
})

export class ExamModule {}