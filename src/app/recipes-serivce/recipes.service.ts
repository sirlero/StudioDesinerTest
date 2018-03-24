import { Injectable } from '@angular/core';
import { find , remove } from 'lodash';
const IMG = 'https://cdn.gobankingrates.com/wp-content/uploads/2016/10/2_Dani-Vincek_shutterstock_365651297-848x477.jpg';

@Injectable()
export class RecipesService {
  recipes = [{
    id:1,
    title:'Dinner',
    description:'Best dinner in Tel-aviv city',
    img:'http://tayimli.com/wp-content/uploads/2013/07/IMG_3908.jpg'
  },
    {
      id:2,
      title:'Lunch',
      description:'Best lunch in Tel-aviv city',
      img:'http://www.itraveltelaviv.com/wp-content/uploads/2015/08/Mizlala.jpg'
    },
    {
      id:3,
      title:'Breakfast',
      description:'Best breakfast in Tel-aviv city',
      img:'http://www.itraveltelaviv.com/wp-content/uploads/2015/08/herbertsamuel.jpg'
    }
  ];
  constructor() { }

  public addRecipe(recipe){
    recipe.id = this.recipes[this.recipes.length-1].id + 1;
    recipe.img = IMG;
    this.recipes.push(recipe);
  }

  public getRecipeById(id){
    return find(this.recipes,(o)=>o.id == id);
  }

  public deleteRecipe(id){
    remove(this.recipes, {id});
  }
}
