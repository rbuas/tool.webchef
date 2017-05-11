import { EventEmitter } from  '@angular/core';

import { Recipe } from './recipe.module';

export class RecipeBook {
  private recipes : {} = {};
  private currentRecipe : Recipe;
  public recipeEvent = new EventEmitter<Recipe>();

  constructor() {
    this.addRecipe(new Recipe("a", "test1-name", "test1-description", "http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg"));
    this.addRecipe(new Recipe("b", "test2-name", "test2-description", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/12/0/FN-Thanksgiving-2010_Brussels-Sprouts_s4x3.jpg.rend.hgtvcom.616.462.jpeg"));
    this.addRecipe(new Recipe("c", "test3-name", "test3-description", "http://www.recette-de-cuisine.fr/wp-content/uploads/2014/05/dessert-gastronomique-recette.jpg"));
  }

  public addRecipe = function(recipe : Recipe) {
    this.recipes[recipe.id] = (recipe);
  }

  public getRecipe = function(id) {
    return this.recipes[id];
  }

  public getRecipes = function() {
    const self = this;
    return Object.keys(this.recipes).map(function(recipeid : string) {
      return self.recipes[recipeid];
    });;
  }

  public selectRecipe = function(recipe:Recipe) {
    this.currentRecipe = recipe;
    this.recipeEvent.emit(recipe);
  }

  public selectedRecipe = function() {
    return this.currentRecipe;
  }
}