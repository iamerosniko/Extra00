import { Component, Input, Output} from '@angular/core';
/* entities */
import { Question } from '../../entities/question';
import { Answer } from '../../entities/answer';
/* Service */
import { AnswerService } from '../../services/answer.service';

@Component({
    moduleId: module.id,
    selector: `exam-form`,
    templateUrl:'exam.component.html'
})
export class ExamFormComponent  { 
    @Input() question:Question;


    constructor(
        public answerService: AnswerService
    ){ }
    
    getQuestion():void{

    }

}
