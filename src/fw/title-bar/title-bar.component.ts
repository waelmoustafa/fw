import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  isVertical: boolean;
  constructor(public menuService: MenuService) {
   }

  ngOnInit() {
    this.isVertical = this.menuService.isVertical;
    console.log(this.isVertical);
  }

}
