import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.module';
import { RecipeBook } from "./recipebook.service";

@Component({
  selector: 'chef-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  private recipeSubscription;
  public recipes : Recipe[];
  public selectedRecipe : Recipe;

  constructor (private recipebook : RecipeBook) {}

  ngOnInit() {
    this.recipes = this.recipebook.getRecipes();
    this.recipeSubscription = this.recipebook.recipeEvent.subscribe(
      (recipe:Recipe) => { this.selectedRecipe = recipe; }
    );
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

}
