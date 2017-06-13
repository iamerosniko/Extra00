import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`generic-pdf.template.html`
})
export class WorkdayComponent  {
    path:string = 'resources/workplace/04DIS TOOLS/Workday Guide.pdf';
    breadcrumbs =['DIS Tools' ,'Workday'];
}
