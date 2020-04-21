import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../app-user-auth';
import { SecurityService } from '../security.service';

@Component({
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  // categories: Category[];
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
   }

  ngOnInit() {
    // this.getCategories();
  }

  // private getCategories(): void {
  //   this.categoryService.getCategories()
  //     .subscribe(categories => this.categories = categories);
  // }
}
