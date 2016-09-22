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
var tastetag_service_1 = require('./tastetag.service');
var TastetagComponent = (function () {
    function TastetagComponent(tastetagService) {
        this.tastetagService = tastetagService;
        this.tastetags = [];
    }
    TastetagComponent.prototype.ngOnInit = function () {
        //TODO::LGCARRIER
        /*coder le service*/
        // this.tastetagService.getTastetags()
        //     .then(tastetags => this.tastetags = tastetags);
        this.tastetags = [
            { id: 'fruity_light', name: 'Fruity and light', searchTerm: '"fruité et léger"' },
            { id: 'fruity_medium_bodied', name: 'Fruity and medium-bodied', searchTerm: '' },
            { id: 'aromatic_supple', name: 'Aromatic and supple', searchTerm: '' },
            { id: 'aromatic_robust', name: 'Aromatic and robust', searchTerm: '' },
            { id: 'delicate_light', name: 'Delicate and light', searchTerm: '' },
            { id: 'fruity_vibrant', name: 'Fruity and vibrant', searchTerm: '' },
            { id: 'aromatic_mellow', name: 'Aromatic and mellow', searchTerm: '' },
            { id: 'fruity_sweet', name: 'Fruity and swee', searchTerm: '' },
            { id: 'fruity_extra_sweet', name: 'Fruity and extra sweet', searchTerm: '' }
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TastetagComponent.prototype, "search2", void 0);
    TastetagComponent = __decorate([
        core_1.Component({
            selector: 'tastetag',
            templateUrl: 'app/tastetag.component.html',
            styleUrls: ['app/tastetag.component.css']
        }), 
        __metadata('design:paramtypes', [tastetag_service_1.TastetagService])
    ], TastetagComponent);
    return TastetagComponent;
}());
exports.TastetagComponent = TastetagComponent;
//# sourceMappingURL=tastetag.component.js.map