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

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        console.log('shopping-list.service.addIngredients');
        console.log(ingredients);

        //Note the spread operator '...' to allow the push method to push an 
        //array to the array (as opposed to pushing a single object to the array)
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

        console.log('new ingredients array');
        console.log(this.ingredients.slice());
    }

    //manage adding ingredients
}