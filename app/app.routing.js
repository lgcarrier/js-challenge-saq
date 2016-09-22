"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
// import {ProductsComponent}     from './products.component';
// import {ProductDetailComponent} from './product-detail.component';
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map