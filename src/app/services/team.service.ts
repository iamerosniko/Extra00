import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Team } from '../entities/team';
@Injectable()
export class TeamService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Teams';

    constructor(private http: Http){}
    getTeams(): Promise<Team[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
