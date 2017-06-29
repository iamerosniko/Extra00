import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { TempUser } from '../entities/tempuser';
@Injectable()
export class TempUserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/TemporaryUsers';

    constructor(private http: Http){}

    postTempUser(user:TempUser){
      return this.http
          .post(this.apiUrl, JSON.stringify(user), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
    }

    putTempUser(user:TempUser): Promise<any> {
        const url = `${this.apiUrl}/${user.ID}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
