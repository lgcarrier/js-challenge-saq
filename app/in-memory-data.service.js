"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 11, name: 'Vin blanc' },
            { id: 12, name: 'Vin rouge' },
            { id: 13, name: 'Vodka' },
            { id: 14, name: 'Biere' },
            { id: 15, name: 'Sac' },
            { id: 16, name: 'Bouchon' },
            { id: 17, name: 'Whisky' },
            { id: 18, name: 'Absinthe' },
            { id: 19, name: 'Rhum' },
            { id: 20, name: 'Gin' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map