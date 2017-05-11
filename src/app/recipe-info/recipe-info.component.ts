import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chef-recipe-info',
  templateUrl: './recipe-info.component.html'
})
export class RecipeInfoComponent implements OnInit {
  recipeid : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipeid = this.route.snapshot.params["id"];
  }

}
