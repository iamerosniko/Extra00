import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app', 
    templateUrl: `arti-proto.html`
    //templateUrl: `Manulife-web/story_html5.html`
    //templateUrl: `pdf-proto.component.html`
})

export class AppComponent {

    sample: string="sagadgdga0";
    selectedValue: string;

    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    pdfSrc: string = '/app/pdf-test.pdf';
    page: number = 1;
}    