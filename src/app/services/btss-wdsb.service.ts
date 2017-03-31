import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { TempProject } from '../entities/tempproject';

@Injectable()
export class BTSSWDSBService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private BTSSUrl = 'api/BTSSProjects';  
    
    constructor(private http: Http){}

    getProjects(): Promise<TempProject[]> {
        return this.http
                .get(this.BTSSUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                .catch(this.handleError);
    }

    getProject(id: string): Promise<TempProject> {
        const url = `${this.BTSSUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  // testing
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}