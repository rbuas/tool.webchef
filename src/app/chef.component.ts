import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChefService } from './chef.service';

@Component({
  selector: 'chef-root',
  templateUrl: './chef.component.html',
  providers: [ChefService]
})
export class ChefComponent {
  title = 'chef works!';

  constructor (private chefService : ChefService, private router : Router) {
    //this.router.navigate(["/recipes"]);
  }
}
