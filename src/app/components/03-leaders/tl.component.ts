import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
@Component({
    moduleId: module.id,
    templateUrl:`generic-vid.component.html`
})
export class TLComponent implements OnInit {
    path:string = '';//'resources/workplace/03LEADERS/gk.mp4';
    breadcrumbs =['Leaders\' Video' ,'Team Leader'];
    public constructor( private resourceService : ResourceService ) {}
    ngOnInit(){
      // this.resourceService.getResourcePath('Leaders')
      //     .then(req=>this.path=req.ResourcePath);
      this.resourceService.getVideo(true).then(
        req=> this.path=req.ResourcePath
      );
    }
    //path:string = 'resources/mock/videoplayback.mp4';

}
