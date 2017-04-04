import { Component,Input } from '@angular/core';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-img',
    template: `
        <object [data]="srcString" type="application/pdf" width="100%" height="100%">
        </object>
        `,
    // templateUrl: 'sync-main.component.html',
})
export class PdfViewerComponent  { 
    @Input() srcString : string; //this handles the path of the image
}



