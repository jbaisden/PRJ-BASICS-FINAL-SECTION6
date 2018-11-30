import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService {
    //manage list of ingredients
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(
            ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    //manage adding ingredients
}