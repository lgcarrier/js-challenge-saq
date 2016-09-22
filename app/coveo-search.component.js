"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var coveo_service_1 = require('./coveo.service');
var CoveoSearchComponent = (function () {
    function CoveoSearchComponent(coveoService) {
        this.coveoService = coveoService;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    CoveoSearchComponent.prototype.search = function (term) {
        console.log(term);
        this.searchTerms.next(term);
    };
    CoveoSearchComponent.prototype.search2 = function (term) {
        var _this = this;
        console.log(term);
        this.coveoResults = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.coveoService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CoveoSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coveoResults = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.coveoService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CoveoSearchComponent.prototype.eventHandler = function (event, term) {
        if (event.key == 'Enter') {
            this.term = term;
            this.search(term);
        }
    };
    CoveoSearchComponent.prototype.getResultsCount = function () {
        if (this.coveoService.getResults() == undefined) {
            return 0;
        }
        else {
            return this.coveoService.getResults().length;
        }
    };
    CoveoSearchComponent.prototype.previousResults = function () {
        this.coveoResults;
    };
    CoveoSearchComponent.prototype.nextResults = function () {
        this.coveoResults;
    };
    CoveoSearchComponent.prototype.sort = function (param, order) {
        this.search(this.term);
    };
    CoveoSearchComponent.prototype.sortPrice = function (order) {
        this.sort('tpprixnum', order);
    };
    CoveoSearchComponent = __decorate([
        core_1.Component({
            selector: 'coveo-search',
            templateUrl: 'app/coveo-search.component.html',
            styleUrls: ['app/coveo-search.component.css'],
            providers: [coveo_service_1.CoveoService]
        }), 
        __metadata('design:paramtypes', [coveo_service_1.CoveoService])
    ], CoveoSearchComponent);
    return CoveoSearchComponent;
}());
exports.CoveoSearchComponent = CoveoSearchComponent;
//# sourceMappingURL=coveo-search.component.js.map