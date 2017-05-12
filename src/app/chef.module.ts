import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ToggleClassDirective } from '../iceberg/toggleclass/toggleclass.directive';
import { PageNotFound } from '../iceberg/basicpages/notfound.component';
import { PageServerError } from '../iceberg/basicpages/servererror.component';

import { ChefApp } from "./chef.service";
import { ChefComponent } from './chef.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingSummaryComponent } from './shopping-summary/shopping-summary.component';
import { RecipeBook } from "./recipe/recipebook.service";
import { RecipeBookResolver } from "./recipe/recipebook.resolver";

@NgModule({
  declarations: [
    ChefComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeInfoComponent,
    RecipeResumeComponent,
    ShoppingListComponent,
    ShoppingSummaryComponent,
    ToggleClassDirective,
    PageNotFound,
    PageServerError
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo: "/recipes", pathMatch:"full"},
      {path:'recipes',component:RecipeListComponent},
      {path:'recipe/:id',component:RecipeInfoComponent, resolve : {recipe : RecipeBookResolver}},
      {path:'recipe/:id/:seo',component:RecipeInfoComponent},
      {path:'shopping',component:ShoppingListComponent},
      
      {path:'servererror',component:PageServerError},
      {path:'notfound',component:PageNotFound},
      {path:'**',redirectTo:"/notfound"}
    ], {useHash : false})
  ],
  providers: [
    ChefApp, 
    RecipeBook, 
    RecipeBookResolver
  ],
  bootstrap: [ChefComponent]
})
export class ChefModule { }
