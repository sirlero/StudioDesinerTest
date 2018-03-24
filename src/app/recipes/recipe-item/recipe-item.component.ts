import { Component,OnInit,Input } from '@angular/core';
import { RecipesService } from '../../recipes-serivce/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  constructor(public recipesService:RecipesService){}

  ngOnInit() {
  }

  deleteItem(id){
    this.recipesService.deleteRecipe(id);
  }
}
