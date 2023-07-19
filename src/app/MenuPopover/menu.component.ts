import { Component } from '@angular/core';

@Component({
  selector: 'menu-popover',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuPopover = false;
  recursiveArray = [0, 1, 2];
  get openMenuPopover(): boolean {
    return this.menuPopover;
  }
  get checkWindowSizeStatus(): boolean {
    return window.matchMedia('(max-width: 600px)').matches;
  }
  togglePopover() {
    console.log('Click');
    this.menuPopover = !this.menuPopover;
  }
}
