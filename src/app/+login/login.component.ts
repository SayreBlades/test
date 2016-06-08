import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

	constructor(){
		console.info("Im LoginComponent");
	}
  
  onSubmit():void {
    alert("hi");
  }
}
