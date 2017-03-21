import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app', 
    templateUrl: `app.component.html`
})

export class AppComponent {

    sample: string="sagadgdga0";
    selectedValue: string;

    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
}    