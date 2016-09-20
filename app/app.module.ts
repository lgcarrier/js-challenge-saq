import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { ProductsComponent }      from './products.component';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductService }          from './product.service';
import { ProductSearchComponent }  from './product-search.component';
import { TastetagComponent }  from './tastetag.component';
import { TastetagService } from "./tastetag.service";
import { CoveoService } from "./coveo.service";
import { CoveoSearchComponent }  from './coveo-search.component';
// import { CoveoResultsComponent }  from './coveo-results.component';
import { routing }              from './app.routing';
import { MdCardModule } from '@angular2-material/card';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
        // ,MdCardModule.forRoot()
        //,MdCardModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductDetailComponent,
        ProductsComponent,
        ProductSearchComponent,
        CoveoSearchComponent,
        TastetagComponent
        // ,CoveoResultsComponent
    ],
    providers: [
        ProductService,
        TastetagService,
        CoveoService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}