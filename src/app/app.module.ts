import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AuthUserComponent } from './auth-user';
import { WelcomeComponent } from './welcome';
//ComponentModules
import { DISOverviewModule } from './components/01-disoverview/disoverview.module';
import { TeamModule } from './components/02-teamoverview/team.module';
import { LeadersModule } from './components/03-leaders/leaders.module';
import { DISToolsModule } from './components/04-distools/distools.module';
import { PolicyModule } from './components/05-policy/policy.module';
import { ExamModule } from './components/06-exam/exam.module';
//routing
import { AppRouting } from './app.routing';
//services
import { AuthService } from './services/auth.service';
import { TeamService } from './services/team.service';
import { LeaderService } from './services/leader.service';
import { TempUserService } from './services/tempuser.service';
@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  CommonModule,
                  LeadersModule,
                  DISOverviewModule,
                  TeamModule,
                  DISToolsModule,
                  PolicyModule,
                  ExamModule,
                  AppRouting
                ],
  declarations: [ AppComponent,AuthUserComponent,WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService,TeamService,LeaderService,TempUserService]
})
export class AppModule { }
