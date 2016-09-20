import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'saq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    title = "Find what best suits you";

    ngOnInit(): void {
    }
}