import { Component} from '@angular/core';
import { Location } from '@angular/common';
import { Routes , Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { LoginComponent } from './+login';
import { HomeComponent } from './+home';

@Component({
  moduleId: module.id,
  selector: 'ng4-app',
  templateUrl: 'ng4.component.html',
  styleUrls: ['ng4.component.css'],
	directives: [LoginComponent, HomeComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/login', component: LoginComponent },
  { path: '/home', component: HomeComponent }
])
export class Ng4AppComponent {
	constructor(private location:Location){
		console.info("Im Ng4AppComponent", location);
    this.location.go('/login');
	}
}
