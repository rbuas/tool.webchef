import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChefApp } from './chef.service';

@Component({
  selector: 'chef-root',
  templateUrl: './chef.component.html'
})
export class ChefComponent {
  title = 'chef works!';

  constructor (private chefapp : ChefApp, private router : Router) {
    //this.router.navigate(["/recipes"]);
  }
}
