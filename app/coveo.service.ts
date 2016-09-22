import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
// import { Subject }    from 'rxjs/Subject';
import {Headers, RequestOptions} from '@angular/http';
import {CoveoResult} from './coveo-result';

const coveoUrl: string = 'https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b';

@Injectable()
export class CoveoService {
    coveoResults: CoveoResult[];

    // // Observable string sources
    // private coveoResultsSource = new Subject<string>();
    //
    // // Observable string streams
    // coveoResults$ = this.coveoResultsSource.asObservable();

    constructor(private http: Http) {
    }

    search(term: string): Observable<CoveoResult[]> {

        return this.http
            .get(coveoUrl + `&q=${term}`)
            .map((r: Response) => this.coveoResults = <CoveoResult[]> r.json().results);
    }

    search2(term: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(coveoUrl, JSON.stringify({"q": term, "@tpprixnum":"ascending"}), headers)
            .map((r: Response) => this.coveoResults = <CoveoResult[]> r.json().results);
    }

    getResults(): CoveoResult[] {
        return this.coveoResults;
    }
}