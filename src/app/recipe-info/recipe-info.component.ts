import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

import { RecipeBook } from '../recipe/recipebook.service';
import { Recipe } from "../recipe/recipe.module";

@Component({
  selector: 'chef-recipe-info',
  templateUrl: './recipe-info.component.html'
})
export class RecipeInfoComponent implements OnInit, OnDestroy {
  public recipeid : number;
  public seo : string;
  public recipe : Recipe;
  public mode : string;

  private querySubscription : Subscription;
  private fragmentsSubscription : Subscription;

  constructor(private recipebook : RecipeBook, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.recipeid = this.route.snapshot.params["id"];
    this.recipe = this.recipebook.getRecipe(this.recipeid);

    console.log("params : ", this.route.snapshot.queryParams);
    this.querySubscription = this.route.queryParams.subscribe(
      (params : Params) => {
        this.mode = params["mode"];
      }
    );

    console.log("fragment : ", this.route.snapshot.fragment);
    this.fragmentsSubscription = this.route.fragment.subscribe(
    );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.fragmentsSubscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo : this.route, queryParamsHandling:"merge"});
  }
}
