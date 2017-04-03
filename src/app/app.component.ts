import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
      <ul class="nav nav-tabs">
            <li role="presentation"><a routerLink="/viewphoto">photo-sample</a></li>
            <li role="presentation"><a routerLink="/follow-up-items">Follow up Items</a></li>
            <li role="presentation"><a routerLink="/reports">Project Review</a></li>
            
        </ul>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { 
  name = 'Angular'; 
}
