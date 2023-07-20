import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { unsafeCSS } from 'lit';
import { FMDEditor } from '@cldcvr/flow-md-editor';
FMDEditor.styles = [
  ...FMDEditor.styles,
  unsafeCSS(`:host .markdown-body h1 {color:red;}`),
];

Promise.all([
  import('@cldcvr/flow-core'),
  import('@cldcvr/flow-system-icon'),
  import('@cldcvr/flow-md-editor'),
]).then(() => {
  if (environment.production) {
    enableProdMode();
  }
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
});
