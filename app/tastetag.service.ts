import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tastetag } from './tastetag';

@Injectable()
export class TastetagService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private tastetagsUrl = 'app/tastetags';  // URL to web api

    constructor(private http: Http) { }

    getTastetags(): Promise<Tastetag[]> {
        return this.http.get(this.tastetagsUrl)
            .toPromise()
            .then(response => response.json().data as Tastetag[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
