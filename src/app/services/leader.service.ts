import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Leader } from '../entities/leader';
@Injectable()
export class LeaderService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Leaders';

    constructor(private http: Http){}
    getLeaders(): Promise<Leader[]> {
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
