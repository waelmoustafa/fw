import { Injectable } from '@angular/core';

export interface IconFile {
  imageFile: string;
  alt: string;
  link: string;
}
export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFile>;
}

@Injectable()// {
  // providedIn: 'root'
// })
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusbarBreakpoint = 0;
  socialIcons = new Array<IconFile>();
constructor() { }
  Configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }
}
