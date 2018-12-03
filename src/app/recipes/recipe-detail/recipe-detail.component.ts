import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  @Input() theRecipe: Recipe;

  ngOnInit() {
  }

  addToShoppingList() {
    console.log('Adding recipe to shopping list');
    this.recipeService.addIngredientsToShoppingList(this.theRecipe.ingredients);
    // this.theRecipe.ingredients.forEach(ingredient => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
  }

}
