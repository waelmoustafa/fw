import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/fw/services/menu-item';
import { MenuService } from 'src/fw/services/menu.service';

@Component({
  selector: 'app-fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  isVertical: boolean;
  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.isVertical = this.menuService.isVertical;
  }

}
