import {Component, OnInit} from '@angular/core';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import {CoveoService} from './coveo.service';
import {CoveoResult} from './coveo-result';

@Component({
    selector: 'coveo-search',
    templateUrl: 'app/coveo-search.component.html',
    styleUrls: ['app/coveo-search.component.css'],
    providers: [CoveoService]
})
export class CoveoSearchComponent implements OnInit {
    term: string;
    coveoResults: Observable<CoveoResult[]>;
    private searchTerms = new Subject<string>();

    constructor(private coveoService: CoveoService) {
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        console.log(term);
        this.searchTerms.next(term);
    }

    search2(term: string): void {
        console.log(term);
        this.coveoResults = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.coveoService.search(term)
                // or the observable of empty products if no search term
                : Observable.of<CoveoResult[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<CoveoResult[]>([]);
            });
    }

    ngOnInit(): void {
        this.coveoResults = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.coveoService.search(term)
                // or the observable of empty products if no search term
                : Observable.of<CoveoResult[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<CoveoResult[]>([]);
            });
    }

    eventHandler(event, term) {
        if (event.key == 'Enter') {
            this.term = term;
            this.search(term);
        }
    }

    getResultsCount() {
        if (this.coveoService.getResults() == undefined) {
            return 0;
        }
        else {
            return this.coveoService.getResults().length;
        }
    }

    previousResults() {
        this.coveoResults

    }

    nextResults() {
        this.coveoResults
    }

    sort(param: string,
         order: string) {
        this.search(this.term);
    }

    sortPrice(order: string) {
        this.sort('tpprixnum', order);
    }
}