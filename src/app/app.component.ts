import { Component } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';
import { MenuService } from 'src/fw/services/menu.service';
import { initialMenuItems } from './framework/app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AL Nagheel App';
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService,
              private frameworkConfigService: FrameworkConfigService,
              private menuService: MenuService) {
    // Security Work
    this.securityObject = securityService.securityObject;
    // Framework work
    // Configure Framework
    this.configureFramework();
    // Configure App Menus
    this.configueMenus();

    // End Framework work
  }
  private configureFramework()
  {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    this.frameworkConfigService.Configure(config);
  }

  private configueMenus() {
    this.menuService.items = initialMenuItems;
  }
  // Security Work
  logout(): void {
    this.securityService.logout();
  }
}
