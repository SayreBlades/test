import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

	constructor(private router:Router){
		console.info("Im LoginComponent", router);
	}
  
	onSubmit(){
    console.info("on submit");
    this.router.navigateByUrl('/home');
	}
}
