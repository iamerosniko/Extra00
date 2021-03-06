import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'auth-user',
  templateUrl: 'auth-user.html'
})
export class AuthUserComponent  {
  @Input() user:Auth;
  activeLink:number=0;
  constructor(
        private router: Router,
  ){ 
    this.routeWOUserName('mission-vision');
  }

  routeWithUserName(path:string){
      this.router.navigate(['/'+path, this.user.userName]);
  }
  routeWOUserName(path:string){
      this.router.navigate(['/'+path]);
  }
  routeWithID(path:string,id:string){
     this.router.navigate(['/'+path, id]);
  }
}
