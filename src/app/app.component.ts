import { Component } from '@angular/core';
import { ConfigUtil } from '@cldcvr/flow-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flow-starterkit-angular';
  ngOnInit() {
    this.themeChange('f-light');
  }

  themeChange(theme: 'f-dark' | 'f-light') {
    ConfigUtil.setConfig({ theme });
  }
}
