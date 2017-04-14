import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:'exam.component.html'
})
export class ExamComponent  { 
    sample:string='sample1';
    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];
}
