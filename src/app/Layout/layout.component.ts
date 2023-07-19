import { Component } from '@angular/core';
import { ConfigUtil } from '@cldcvr/flow-core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  title = 'Layout';
  sidebar = false;
  avatar = false;
  theme = 'f-dark';

  get openSidebar(): boolean {
    return this.sidebar;
  }
  get checkWindowSizeStatus(): boolean {
    return window.matchMedia('(max-width: 600px)').matches;
  }
  get openAvatarPopup(): boolean {
    return this.avatar;
  }
  get computedTheme(): string {
    return this.theme;
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
  toggleAvatarPopup() {
    this.avatar = !this.avatar;
  }
  setTheme(theme: 'f-dark' | 'f-light') {
    if (theme) {
      this.theme = theme;
      ConfigUtil.setConfig({ theme });
    }
  }
}
