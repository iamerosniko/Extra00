import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`strategies.component.html`
})
export class StrategiesComponent  {
    slides: any[] = [];

    public constructor() {
        this.addSlide('MBPS Digital Information Services TH April 28.jpg');
        this.addSlide('03 - Strategy-1.jpg');
        this.addSlide('03 - Strategy-2.jpg');
        this.addSlide('03 - Strategy-3.jpg');
        this.addSlide('03 - Strategy-4.jpg');
        // this.addSlide('03a - customer experience.png');
        // this.addSlide('03b - process improvement.png');
        // this.addSlide('03c - cost efficiencies.png');
        // this.addSlide('03d - performance.png');
        // this.addSlide('strategies.jpg');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/strategies/${ filename }`
        });
    }

    breadcrumbs =['DIS Overview' ,'Strategies'];
}
