import {InMemoryDbService} from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {id: 11, name: 'Vin blanc'},
            {id: 12, name: 'Vin rouge'},
            {id: 13, name: 'Vodka'},
            {id: 14, name: 'Biere'},
            {id: 15, name: 'Sac'},
            {id: 16, name: 'Bouchon'},
            {id: 17, name: 'Whisky'},
            {id: 18, name: 'Absinthe'},
            {id: 19, name: 'Rhum'},
            {id: 20, name: 'Gin'}
        ];

        return {products};
    }

    // createDb() {
    //     let tastetags = [
    //         {id: 'fruity_light', name: 'Fruity and light'},
    //         {id: 'fruity_medium_bodied', name: 'Fruity and medium-bodied'},
    //         {id: 'aromatic_supple', name: 'Aromatic and supple'},
    //         {id: 'aromatic_robust', name: 'Aromatic and robust'},
    //         {id: 'delicate_light', name: 'Delicate and light'},
    //         {id: 'fruity_vibrant', name: 'Fruity and vibrant'},
    //         {id: 'aromatic_mellow', name: 'Aromatic and mellow'},
    //         {id: 'fruity_sweet', name: 'Fruity and swee'},
    //         {id: 'fruity_extra_sweet', name: 'Fruity and extra sweet'}
    //     ];
    //
    //     return {tastetags};
    // }
}