import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl:`strategies.component.html`
})
export class ProgramsComponent implements OnInit { 
    slides: any[] = [];
    routeName: '';
    breadcrumbs:any[]=[];
    public constructor(private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(){
        console.log('ngoninit');
        this.breadcrumbs=[];
        this.breadcrumbs =['DIS Overview','Programs'];
        this.getRouteName();
        this.getImage();
    }
    getImage(){
        console.log('ngoninit');
        this.addSlide(this.routeName+'.jpg');
    }
    getRouteName(){
        console.log('ngoninit');
        this.route.params.subscribe(params => {
            this.routeName = params['id'];
            this.breadcrumbs.push(this.routeName);
        }); 
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/Programs/${ filename }`
        });
    }

}
