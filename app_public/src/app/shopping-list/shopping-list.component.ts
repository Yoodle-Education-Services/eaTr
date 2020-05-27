import { Component, OnInit } from '@angular/core';

export class ShoppingList {
  ingredient: string;
  quantity: number;
  unitOfMeasure: string;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  title:string='Shopping List';

  shoppingListItems:any[] = [];
  
  constructor() { }

 /*  list: ShoppingList = [
    {
      ingredient: 'flour',
      quantity: 2,
      unitOfMeasure: 'cups'
    }, {
      ingredient: 'eggs',
      quantity: 6,
      unitOfMeasure: 'large'
    }, {
      ingredient: 'chocolate chips',
      quantity: .5,
      unitOfMeasure: 'cup'
    }, {
      ingredient: 'onion',
      quantity: .5,
      unitOfMeasure: 'cup'
    }, {
      ingredient: 'butter',
      quantity: 4,
      unitOfMeasure: 'tablespoons'
    }, {
      ingredient: 'milk',
      quantity: .75,
      unitOfMeasure: 'cup'
    }, {
      ingredient: 'water',
      quantity: 3,
      unitOfMeasure: 'cups'
    }
  ]; */

  ngOnInit() {
  }

}
