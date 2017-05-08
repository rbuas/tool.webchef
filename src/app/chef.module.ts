import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChefComponent } from './chef.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingSummaryComponent } from './shopping-summary/shopping-summary.component';

@NgModule({
  declarations: [
    ChefComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeInfoComponent,
    RecipeResumeComponent,
    ShoppingListComponent,
    ShoppingSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ChefComponent]
})
export class ChefModule { }
