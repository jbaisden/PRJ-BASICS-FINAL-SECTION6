import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];
  recipeIngredients: Ingredient[];
  private subscription:Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log("ngOnInit called in shopping-list component.");
    this.recipeIngredients = this.shoppingListService.getIngredients();    
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
      this.recipeIngredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // AddIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
