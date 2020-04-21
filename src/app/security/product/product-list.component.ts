import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Product } from './product';
// import { ProductService } from './product.service';
import { AppUserAuth } from '../app-user-auth';
import { SecurityService } from '../security.service';

@Component({
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  securityObject: AppUserAuth = null;

  constructor(private router: Router,
              private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
    // this.getProducts();
  }
}
