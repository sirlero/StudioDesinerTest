import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import {RecipesService} from './recipes-serivce/recipes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterViewModule } from './master-view/master-view.module';
import { ROUTES } from './app.routes';
import { RecipePageComponent } from './recipe-page/recipe-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MasterViewModule,
    RecipesModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
