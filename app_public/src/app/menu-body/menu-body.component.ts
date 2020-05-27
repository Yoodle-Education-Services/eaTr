import { Component, OnInit } from '@angular/core';
import { EatrDataService } from '../eatr-data.service';
import { FrameworkComponent } from '../framework/framework.component';
import { Recipe } from '../chef'; //commented out ingredients from recipe type

@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.css']
})

export class MenuBodyComponent implements OnInit {

  public recipeVisible: boolean = false;
  
  constructor(
    private eatrDataService: EatrDataService,
    private frameworkComponent: FrameworkComponent,
    ) { }

  public recipes: Recipe[]

  public message: string;
  
  private getRecipes(): void {
    this.message = 'Searching for things to eat';
    this.eatrDataService
      .getRecipes()
      .then(foundRecipes => {
        this.recipes = foundRecipes;
        this.message = foundRecipes.length > 0 ? '' : 'No recipes found';
      });
  }

  ngOnInit() {
    this.getRecipes();
  }

}