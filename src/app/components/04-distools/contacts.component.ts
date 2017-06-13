import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`generic-pic.component.html`
})
export class ContactsComponent  {
    breadcrumbs =['DIS Tools' ,'Contact Numbers'];
    slides: any[] = [];

    public constructor() {
        this.addSlide('MBPS Hotlines.jpg');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/04DIS TOOLS/${ filename }`
        });
    }
}
