import { Component, OnInit } from '@angular/core';
import { EaTrDataService } from '../ea-tr-data.service';
import { ShoppingList } from '../shoppingList'

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})

export class FrameworkComponent {

  constructor( private eatrDataService: EaTrDataService) { }

  public shoppingList: ShoppingList[];

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

  saveOption() {
    this.slPopUpOpen = false;
  }

  deleteOption() {
    this.slPopUpOpen = false;
 }

}