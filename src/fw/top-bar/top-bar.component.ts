import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
// import { UserApi } from '../users/user-api';

@Component({
  selector: 'app-fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private frameworkConfigService: FrameworkConfigService) {
  }
  FrameworkConfigService = this.frameworkConfigService;
  ngOnInit() {}

  signOut() {
    // this.userApi.signOut();
  }
}
