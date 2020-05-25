import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shoppingList';

@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.css']
})
export class MenuBodyComponent implements OnInit {

  public recipes: Recipe[];
  public recipeVisible: boolean = false;
  public aboutVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
