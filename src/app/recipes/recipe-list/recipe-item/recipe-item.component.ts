import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private route: Router) { }
  @Input() index: number;
  @Input() currentRecipe: Recipe;

  // SetSelected() {
  //   this.recipeService.recipeSelected.emit(this.currentRecipe);
  //   this.route.navigate([this.currentRecipe.name]);
  // }

  ngOnInit() {
  }


}
