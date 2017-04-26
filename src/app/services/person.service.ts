import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person } from '../entities/person';
@Injectable()
export class PersonService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Persons';  
    
    constructor(private http: Http){}
    //pass the question id
    getPerson(username: string): Promise<Person> {
        const url = `${this.apiUrl}/GetPW_Person/?username=${username}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}