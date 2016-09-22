import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent}  from './dashboard.component';
// import {ProductsComponent}     from './products.component';
// import {ProductDetailComponent} from './product-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent

    },
    // {
    //     path: 'detail/:id',
    //     component: ProductDetailComponent
    // },
    // {
    //     path: 'products',
    //     component: ProductsComponent
    // }
    // ,
    // {
    //     path: '#q=',
    //     redirectTo: '/HELLOWORLD'
    // },
    // {
    //     path: '#q=',
    //     redirectTo: '/HELLOWORLD'
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);













