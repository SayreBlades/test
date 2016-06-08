import { Component } from '@angular/core';
import { HomeComponent } from './home';
import { TestrouteComponent } from './+testroute';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { LoginComponent } from './+login';

@Component({
  moduleId: module.id,
  selector: 'ng4-app',
  templateUrl: 'ng4.component.html',
  styleUrls: ['ng4.component.css'],
	directives: [LoginComponent, HomeComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/login', component: LoginComponent },
  {path: '/testroute', component: TestrouteComponent}
])
export class Ng4AppComponent {
	constructor(){
		console.info("Im Ng4AppComponent");
	}
}
