import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }
  theRecipe: Recipe;
  recipeId: number;

  ngOnInit() {
    console.log('RecipeDetailComponent: ngOnInit() called.');
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.theRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  addToShoppingList() {
    console.log('Adding recipe to shopping list');
    this.recipeService.addIngredientsToShoppingList(this.theRecipe.ingredients);
    // this.theRecipe.ingredients.forEach(ingredient => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
  }

}
