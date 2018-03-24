import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes-serivce/recipes.service';
import { get } from 'lodash';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  public recipe;
  constructor(private route:ActivatedRoute, private recipesService:RecipesService) { }

  ngOnInit() {
    this.recipe = this.recipesService.getRecipeById(get(this.route,'snapshot.params.id'));
  }

}
