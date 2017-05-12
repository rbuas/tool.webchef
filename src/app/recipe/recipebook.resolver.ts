import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe.module';
import { RecipeBook } from './recipebook.service';

@Injectable()
export class RecipeBookResolver implements Resolve<Recipe> {
    constructor(private recipebook : RecipeBook) {}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) 
    : Observable<Recipe> | Promise<Recipe> | Recipe 
    {
        return this.recipebook.getRecipe(route.params["id"]);
    }
}