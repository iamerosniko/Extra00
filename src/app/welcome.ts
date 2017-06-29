import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Auth } from './entities/auth';
import { Team } from './entities/team';
import { Leader } from './entities/leader';
import { TempUser } from './entities/tempuser';
import { TeamService } from './services/team.service';
import { LeaderService } from './services/leader.service';
import { TempUserService } from './services/tempuser.service';
@Component({
  moduleId: module.id,
  selector: 'welcome-user',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.css']
})
export class WelcomeComponent implements OnInit {
  @Input() user:Auth=new Auth(true,'','');
  @Output() cv=new EventEmitter();
  teams:Team[]=[];
  leaders:Leader[]=[];
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0,true);

  ngOnInit(){

  }
  constructor(
    private teamService:TeamService,
    private leaderService : LeaderService,
    private tempuserService : TempUserService
  ){
    this.getTeams();
    this.getLeaders();

  }

  getTeams(){
    this.teamService.getTeams().then(
      teams => this.teams = teams
    );
  }

  getLeaders(){
    this.leaderService.getLeaders().then(
      leaders => this.leaders = leaders
    )
  }

  submitUser(){
    if(this.tempuser.FirstName=="" ||
    this.tempuser.LastName=="" ||
    this.tempuser.TeamID==""||
    this.tempuser.LeaderID==0){
      alert("Some fields are not supplied.")
    }
    else{
      this.tempuser.UserName=this.user.userName;
      this.tempuserService.postTempUser(this.tempuser).then(()=>{
        console.log("okay");
      })
      this.changeView();
    }
  }

  photo:string='Resources/Images/background.png';
  changeView(){
    this.cv.emit();
  }
}
