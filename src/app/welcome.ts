import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Auth } from './entities/auth';
import { Team } from './entities/team';
import { TeamService } from './services/team.service';
@Component({
  moduleId: module.id,
  selector: 'welcome-user',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.css']
})
export class WelcomeComponent  {
  @Input() user:Auth;
  @Output() cv=new EventEmitter();
  teams:Team[]=[];

  constructor(
    private teamService:TeamService
  ){
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().then(
      teams => this.teams = teams
    );
  }

  photo:string='Resources/Images/background.png';
  changeView(){
    this.cv.emit();
  }
}
