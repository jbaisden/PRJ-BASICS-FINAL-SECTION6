import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Tasty Schnitzel',
            'A super-tasty scnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Cheese', 2),
                new Ingredient('Meat', 2)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        //calling slice returns a new array and not a reference to the this.recipes object.
        return this.recipes.slice();
    }
}