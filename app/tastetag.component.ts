import {Component, OnInit, Input} from '@angular/core';
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

    @Input() search2;

    ngOnInit(): void {
        //TODO::LGCARRIER
        /*coder le service*/
        // this.tastetagService.getTastetags()
        //     .then(tastetags => this.tastetags = tastetags);

        this.tastetags = [
            {id: 'fruity_light', name: 'Fruity and light', searchTerm: '"fruité et léger"'},
            {id: 'fruity_medium_bodied', name: 'Fruity and medium-bodied', searchTerm: ''},
            {id: 'aromatic_supple', name: 'Aromatic and supple', searchTerm: ''},
            {id: 'aromatic_robust', name: 'Aromatic and robust', searchTerm: ''},
            {id: 'delicate_light', name: 'Delicate and light', searchTerm: ''},
            {id: 'fruity_vibrant', name: 'Fruity and vibrant', searchTerm: ''},
            {id: 'aromatic_mellow', name: 'Aromatic and mellow', searchTerm: ''},
            {id: 'fruity_sweet', name: 'Fruity and swee', searchTerm: ''},
            {id: 'fruity_extra_sweet', name: 'Fruity and extra sweet', searchTerm: ''}
        ];
    }
}