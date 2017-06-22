import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
@Component({
    moduleId: module.id,
    templateUrl:`generic-vid.component.html`
})
export class ManagerComponent implements OnInit {
    path:string = '';//'resources/workplace/03LEADERS/gk.mp4';
    breadcrumbs =['Leaders\' Video' ,'Manager'];
    public constructor( private resourceService : ResourceService ) {}
    ngOnInit(){
      this.resourceService.getResourcePath('Manager')
          .then(req=>this.path=req.ResourcePath);
    }
    //path:string = 'resources/mock/videoplayback.mp4';

}
