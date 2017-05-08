import { Recipe } from './recipe.module';

export class RecipeBook {
  public recipes : Recipe[] = [];

  constructor() {
  }

  public addRecipe = function(recipe : Recipe) {
    this.recipes.push(recipe);
  }
}
