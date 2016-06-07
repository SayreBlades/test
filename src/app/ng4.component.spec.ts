import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng4AppComponent } from '../app/ng4.component';

beforeEachProviders(() => [Ng4AppComponent]);

describe('App: Ng4', () => {
  it('should create the app',
      inject([Ng4AppComponent], (app: Ng4AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng4 works!\'',
      inject([Ng4AppComponent], (app: Ng4AppComponent) => {
    expect(app.title).toEqual('ng4 works!');
  }));
});
