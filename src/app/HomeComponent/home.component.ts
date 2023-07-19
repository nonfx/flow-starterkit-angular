import { Component } from '@angular/core';
import sampleMd from 'src/utils/sample-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tabList = [
    { id: 0, title: 'Announcements', icon: 'i-rss' },
    { id: 1, title: 'User Guides', icon: 'i-info-fill' },
  ];
  selected = 0;
  open = true;
  openPopover = false;
  gridData = [
    {
      id: 0,
      icon: 'assets/dp.svg',
      title: 'Data Vault',
      description:
        'Organised repository of data assets in CSC. Enabling you to find required data and descriptions with ease.',
    },
    {
      id: 1,
      icon: 'assets/star.svg',
      title: 'Data Vault',
      description:
        'Organised repository of data assets in CSC. Enabling you to find required data and descriptions with ease.',
    },
  ];
  mdValue = sampleMd;

  handleSwitchTab(item: { id: number; title?: string; icon?: string }) {
    this.selected = item.id;
  }
  toggleLeftcolumn() {
    this.open = !this.open;
  }
  togglePopover() {
    this.openPopover = !this.openPopover;
  }
}
