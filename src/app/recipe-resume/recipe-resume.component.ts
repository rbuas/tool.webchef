import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe/recipe.module";

@Component({
  selector: 'chef-recipe-resume',
  templateUrl: './recipe-resume.component.html'
})
export class RecipeResumeComponent implements OnInit {
  @Input() recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
