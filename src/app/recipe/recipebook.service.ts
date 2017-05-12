import { EventEmitter, Injectable } from  '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

import { ChefApp } from "../chef.service";
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeBook {
  public recipeEvent = new EventEmitter<Recipe>();

  constructor(private http : Http, private chefapp : ChefApp) {
    this.chefapp.config.subscribe(
      (config) => {
        this.backendUrl = chefapp.get("backend");
        this.backendMode = chefapp.get("backmode");
        this.readRecipes().subscribe((recipes) => { });
      }
    );
  }

  public addRecipe = function(recipe : Recipe) {
    this.recipes[recipe.id] = recipe;
  }

  public getRecipe = function(id) {
    return this.recipes[id];
  }

  public getRecipes = function() {
    const self = this;
    return Object.keys(this.recipes).map(function(recipeid : string) {
      return self.recipes[recipeid];
    });
  }

  public selectRecipe = function(recipe:Recipe) {
    this.currentRecipe = recipe;
    this.recipeEvent.emit(recipe);
  }

  public selectedRecipe = function() {
    return this.currentRecipe;
  }


  //PRIVATE
  private recipes : {} = {};
  private currentRecipe : Recipe;
  private backendUrl : string;
  private backendMode : string;

  private backendAction = function(action : string) {
    const url = [this.backendUrl, action].join("/");
    return this.backendMode ? url + "." + this.backendMode : url;
  }

  private readRecipes = function() {
    const headers = new Headers({"Content-Type" : "application/json"});
    const action = this.backendAction("recipe");
    return this.http.get(action, {headers : headers})
      .map(
        (response : Response) => { 
          const recipes = response.json();
          this.recipes = recipes;
          return recipes;
        }
      )
      .catch(
        (error : Response) => { 
          console.log(error); return Observable.throw(error);
        }
      );
  }

  private writeRecipes = function() {
    const action = this.backendAction("recipe");
    return this.http.put(action, this.recipes);
  }

  private writeRecipe = function(recipe : Recipe) {
    const headers = new Headers({"Content-Type" : "application/json"});
    const action = this.backendAction("recipe");
    return this.http.put(action, recipe, {headers : headers});
  }
}