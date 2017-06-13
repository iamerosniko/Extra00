import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl :`generic-pdf.template.html`
    //templateUrl:`opt.component.html`
})
export class OptComponent  {
    path:string = 'resources/workplace/04DIS TOOLS/01OPT.pdf';
    breadcrumbs =['DIS Tools' ,'OPT'];
}
