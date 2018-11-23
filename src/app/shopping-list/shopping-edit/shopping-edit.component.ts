import { ViewChild, Component, OnInit, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  AddIngredient() {
    this.onAddIngredient.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
