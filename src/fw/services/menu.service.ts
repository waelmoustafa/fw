import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';


@Injectable()
export class MenuService {
items: Array<MenuItem>;
isVertical = false;
showingLeftSideMenu = false;
constructor() {}

toggleLeftSideMenu(): void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
    // console.log(this.showingLeftSideMenu);
}
}
