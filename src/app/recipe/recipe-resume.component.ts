import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Recipe } from "./recipe.module";
import { RecipeBook } from "./recipebook.service";

@Component({
  selector: 'chef-recipe-resume',
  templateUrl: './recipe-resume.component.html'
})
export class RecipeResumeComponent implements OnInit {
  private recipeSubscription;

  @Input() recipe : Recipe;
  @HostBinding("class.selected") isSelected = false;

  constructor(private recipebook : RecipeBook) {
  }

  ngOnInit() {
    this.recipeSubscription = this.recipebook.recipeEvent.subscribe(
      (recipe:Recipe) => { this.isSelected = recipe == this.recipe; }
    )
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

  onSelected() {
    this.recipebook.selectRecipe(this.recipe);
  }

}
