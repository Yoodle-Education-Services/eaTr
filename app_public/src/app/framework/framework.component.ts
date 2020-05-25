import { Component, OnInit } from '@angular/core';
import { EaTrDataService } from '../eatr-data.service';
import { ShoppingList } from '../shoppingList'

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})

export class FrameworkComponent implements OnInit {

  constructor( private eatrDataService: EaTrDataService) { }

  public shoppingList: ShoppingList[];

  public message: string;

  ngOnInit() {
    this.getShoppingList();
  }

  private getShoppingList(): void {
    this.message = 'Fetching shopping list now.';
    this.eatrDataService
      .getShoppingList()
        .then(foundShoppingList => this.shoppingList = foundShoppingList);
        };

  private showError(error: any): void {
    this.message = error.message;
  }

  public menuVisible: boolean = false;

  popUpOpen = false;
  slPopUpOpen = false;

  openPopUp() {
    this.popUpOpen = true;
  }

  cancelOption() {
    this.popUpOpen = false;
  }

  slOpenPopUp() {
    this.slPopUpOpen = true;
  }

  addOption() {
    this.slPopUpOpen = false;
  }

  saveOption() {
    this.slPopUpOpen = false;
  }

  deleteOption() {
    this.slPopUpOpen = false;
 }

}