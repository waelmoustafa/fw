import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';


@Injectable()
export class MenuService {
items: Array<MenuItem>;
isVertical: true;
constructor() {
}

}
