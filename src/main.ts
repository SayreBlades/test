import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng4AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng4AppComponent);

