import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})

/*export class ShoppingList {
  item: {
    ingredient: string;
    quantity: number;
    unitOfMeasure: string;
    }
}*/

export class FrameworkComponent {

  public menuVisible: boolean = false;

  popUpOpen = false;

  openPopUp() {
    this.popUpOpen = true;
  }

  cancelOption() {
    this.popUpOpen = false;
  }

}