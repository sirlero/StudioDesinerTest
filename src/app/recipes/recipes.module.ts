import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RecipesService } from '../recipes-serivce/recipes.service';



@NgModule({
    declarations: [
        RecipesComponent,
        RecipeItemComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ],
    providers: [
        RecipesService
    ]
})
export class RecipesModule { }
