import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ToggleClassDirective } from '../iceberg/toggleclass/toggleclass.directive';
import { PageNotFound } from '../iceberg/basicpages/notfound.component';
import { PageServerError } from '../iceberg/basicpages/servererror.component';

import { ChefComponent } from './chef.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingSummaryComponent } from './shopping-summary/shopping-summary.component';
import { RecipeBook } from "./recipe/recipebook.service";

@NgModule({
  declarations: [
    ChefComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeInfoComponent,
    RecipeResumeComponent,
    ShoppingListComponent,
    ShoppingSummaryComponent,
    ToggleClassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:RecipeListComponent},
      {path:'recipes',component:RecipeListComponent},
      {path:'recipe/:id',component:RecipeInfoComponent},
      {path:'recipe/:id/:seo',component:RecipeInfoComponent},
      {path:'shopping',component:ShoppingListComponent},
      
      {path:'servererror',component:PageServerError},
      {path:'notfound',component:PageNotFound},
      {path:'**',redirectTo:"/notfound"}
    ])
  ],
  providers: [RecipeBook],
  bootstrap: [ChefComponent]
})
export class ChefModule { }
