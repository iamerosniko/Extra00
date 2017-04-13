import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExamComponent } from './exam.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        
    ],
    declarations: [
        ExamComponent
    ],
    providers: [
    ]
})

export class QuizModule {}