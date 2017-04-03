import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <li role="presentation"><a routerLink="/pic1">Projects</a></li>
  <li role="presentation"><a routerLink="/pic2">Follow up Items</a></li>
  <li role="presentation"><a routerLink="/video">Project Review</a></li>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { 
  name = 'Angular'; 
}
