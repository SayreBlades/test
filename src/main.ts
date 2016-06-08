import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { Ng4AppComponent, environment } from './app/';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng4AppComponent, [
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

