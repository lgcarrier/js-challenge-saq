import {Component, Input} from '@angular/core';

@Component({
    selector: 'coveo-results',
    templateUrl: 'app/coveo-results.component.html',
    styleUrls: ['app/coveo-results.component.css']
})
export class CoveoResultsComponent {
    @Input('results') coveoResults;
}