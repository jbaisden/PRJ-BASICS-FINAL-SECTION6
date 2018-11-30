import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // setSelectedRecipe(selectedRecipe: Recipe) {
  //   this.recipeWasSelected.emit(selectedRecipe);
  // }

}
