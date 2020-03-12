import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';


if (environment.production) {
  enableProdMode();
 
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
