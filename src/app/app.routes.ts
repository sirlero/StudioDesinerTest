import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
export const ROUTES: Routes = [
  { path: 'recipes',    component: RecipesComponent },
  { path: 'recipes/:id',    component: RecipePageComponent },
  { path: '**',redirectTo:'recipes', pathMatch:'full' },
  { path: '', redirectTo:'recipes', pathMatch:'full' },
];
