import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Auth } from './entities/auth';
import { Team } from './entities/team';
import { TempUser } from './entities/tempuser';
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
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0);
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

  submitUser(){
    if(this.tempuser.FirstName=="" ||
    this.tempuser.LastName=="" ||
    this.tempuser.Team==""||
    this.tempuser.Leader==0){
      alert("Some fields are not supplied.")
    }
    else{
      this.changeView();
    }
  }

  photo:string='Resources/Images/background.png';
  changeView(){
    this.cv.emit();
  }
}
