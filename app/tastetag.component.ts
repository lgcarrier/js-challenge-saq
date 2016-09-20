import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Tastetag}        from './tastetag';
import {TastetagService} from './tastetag.service';

@Component({
    selector: 'tastetag',
    templateUrl: 'app/tastetag.component.html',
    styleUrls: ['app/tastetag.component.css']
})
export class TastetagComponent implements OnInit {
    tastetags: Tastetag[] = [];

    constructor(private tastetagService: TastetagService) {
    }

    ngOnInit(): void {
        //TODO::LGCARRIER
        /*coder le service*/
        // this.tastetagService.getTastetags()
        //     .then(tastetags => this.tastetags = tastetags);

        this.tastetags = [
            {id: 'fruity_light', name: 'Fruity and light'},
            {id: 'fruity_medium_bodied', name: 'Fruity and medium-bodied'},
            {id: 'aromatic_supple', name: 'Aromatic and supple'},
            {id: 'aromatic_robust', name: 'Aromatic and robust'},
            {id: 'delicate_light', name: 'Delicate and light'},
            {id: 'fruity_vibrant', name: 'Fruity and vibrant'},
            {id: 'aromatic_mellow', name: 'Aromatic and mellow'},
            {id: 'fruity_sweet', name: 'Fruity and swee'},
            {id: 'fruity_extra_sweet', name: 'Fruity and extra sweet'}
        ];
    }
}