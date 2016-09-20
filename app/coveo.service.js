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
var http_1 = require('@angular/http');
// import { Subject }    from 'rxjs/Subject';
var http_2 = require('@angular/http');
var coveoUrl = 'https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b';
var CoveoService = (function () {
    // // Observable string sources
    // private coveoResultsSource = new Subject<string>();
    //
    // // Observable string streams
    // coveoResults$ = this.coveoResultsSource.asObservable();
    function CoveoService(http) {
        this.http = http;
    }
    CoveoService.prototype.search = function (term) {
        var _this = this;
        return this.http
            .get(coveoUrl + ("&q=" + term))
            .map(function (r) { return _this.coveoResults = r.json().results; });
    };
    CoveoService.prototype.search2 = function (term) {
        var _this = this;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(coveoUrl, JSON.stringify({ "q": term, "@tpprixnum": "ascending" }), headers)
            .map(function (r) { return _this.coveoResults = r.json().results; });
    };
    CoveoService.prototype.getResults = function () {
        return this.coveoResults;
    };
    CoveoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CoveoService);
    return CoveoService;
}());
exports.CoveoService = CoveoService;
//# sourceMappingURL=coveo.service.js.map