import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input() currentRecipe: Recipe;
  @Output() onRecipeSelected = new EventEmitter<void>();

  SetSelected() {
    this.onRecipeSelected.emit();
  }

  ngOnInit() {
  }


}
