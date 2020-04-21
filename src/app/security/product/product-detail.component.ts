import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { Product } from './product';
import { Category } from '../category/category';
import { AppUserAuth } from '../app-user-auth';
import { SecurityService } from '../security.service';

@Component({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  // product: Product;
  // originalProduct: Product;
  // categories: Category[];
  securityObject: AppUserAuth = null;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private securityService: SecurityService) {
  this.securityObject = securityService.securityObject;
 }

  ngOnInit() {


  }




}
