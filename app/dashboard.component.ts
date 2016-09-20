import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Product }        from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    products: Product[] = [];

    constructor(
        private router: Router,
        private productService: ProductService) {
    }

    ngOnInit(): void {
        // this.productService.getProducts()
        //     .then(products => this.products = products.slice(1, 5));
    }

    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }
}