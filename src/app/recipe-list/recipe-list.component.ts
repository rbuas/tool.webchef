import { Component, OnInit } from '@angular/core';

import { RecipeBook } from '../recipe/recipebook.module';
import { Recipe } from '../recipe/recipe.module';

@Component({
  selector: 'chef-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipebook : RecipeBook;

  constructor () {
    this.recipebook = new RecipeBook();
    this.recipebook.addRecipe(new Recipe("test1-name", "test1-description", "http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg"));
    this.recipebook.addRecipe(new Recipe("test2-name", "test2-description", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/12/0/FN-Thanksgiving-2010_Brussels-Sprouts_s4x3.jpg.rend.hgtvcom.616.462.jpeg"));
    this.recipebook.addRecipe(new Recipe("test3-name", "test3-description", "https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg"));
  }

  ngOnInit() {
  }

}
