import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];
  recipeIngredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log("ngOnInit called in shopping-list component.");
    this.recipeIngredients = this.shoppingListService.getIngredients();    
    this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
      this.recipeIngredients = ingredients;
    });
  }

  // AddIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
