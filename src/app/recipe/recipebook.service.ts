import { EventEmitter } from  '@angular/core';

import { Recipe } from './recipe.module';

export class RecipeBook {
  private recipes : Recipe[] = [];
  private currentRecipe : Recipe;
  public recipeEvent = new EventEmitter<Recipe>();

  constructor() {
    this.addRecipe(new Recipe("test1-name", "test1-description", "http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg"));
    this.addRecipe(new Recipe("test2-name", "test2-description", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/12/0/FN-Thanksgiving-2010_Brussels-Sprouts_s4x3.jpg.rend.hgtvcom.616.462.jpeg"));
    this.addRecipe(new Recipe("test3-name", "test3-description", "https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg"));
  }

  public addRecipe = function(recipe : Recipe) {
    this.recipes.push(recipe);
  }

  public getRecipes = function() {
    return this.recipes.slice();
  }

  public selectRecipe = function(recipe:Recipe) {
    this.currentRecipe = recipe;
    this.recipeEvent.emit(recipe);
  }

  public selectedRecipe = function() {
    return this.currentRecipe;
  }
}