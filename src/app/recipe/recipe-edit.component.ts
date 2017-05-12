import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

import { RecipeBook } from './recipebook.service';
import { Recipe } from "./recipe.module";

@Component({
  selector: 'chef-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  public recipeid : number;
  public seo : string;
  public recipe : Recipe;
  public mode : string;
  public editMode : boolean = false;

  private dataSubscription : Subscription;
  private querySubscription : Subscription;
  private fragmentsSubscription : Subscription;

  constructor(private recipebook : RecipeBook, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe(
      (data : Data) => {
        this.recipe = data["recipe"];
      }
    );

    this.querySubscription = this.route.queryParams.subscribe(
      (params : Params) => {
        this.mode = params["mode"];
        this.editMode = params["id"] != null;
      }
    );

    this.fragmentsSubscription = this.route.fragment.subscribe(
      (params : string) => {
        console.log("TODO : use fragments");
      }
    );
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
    this.fragmentsSubscription.unsubscribe();
  }

  onSave() {
    console.log("TODO : save eddited recipe");
  }
}
