import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/fw/services/menu.service';
import { MenuItem } from 'src/fw/services/menu-item';

@Component({
  selector: 'app-fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) {}
  menuItems: Array<MenuItem>;
  isVertical: boolean;
  ngOnInit() {
    this.menuItems = this.menuService.items;
    this.isVertical = this.menuService.isVertical;
    console.log(this.isVertical);
  }

}
