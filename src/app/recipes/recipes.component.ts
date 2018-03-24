import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes-serivce/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  constructor(public recipesService: RecipesService) {
    this.recipes = recipesService.recipes;
  }

  ngOnInit() {
  }

}
