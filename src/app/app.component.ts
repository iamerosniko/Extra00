import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    auth:Auth=new Auth(false,'','');
    viewPage:number=0;
    constructor(
        public authService: AuthService,
        public router : Router
    ){
        this.authService.getAuthorization()
            .then(auth => {
                this.auth=auth;
            });
    }
    async changeView(){
        if(this.auth.isAuthenticated){
            this.viewPage=await 1;
            await this.routeWOUserName('mission-vision');
        } 
    }
    async routeWOUserName(path:string){
      this.router.navigate(['/'+path]);
    }
}
