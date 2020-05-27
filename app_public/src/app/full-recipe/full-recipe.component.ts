import { Component, OnInit } from '@angular/core';
import { EatrDataService } from '../eatr-data.service';
import { FrameworkComponent } from '../framework/framework.component';
import { Recipe } from '../chef'; //commented out ingredients from recipe type

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})

export class FullRecipeComponent implements OnInit {

//  private getRecipeById: string;

  public menuVisible: boolean = false;

  constructor(
    private eatrDataService: EatrDataService,
    private frameworkComponent: FrameworkComponent,
    ) { }
    
  ngOnInit() {
    //this.getRecipeById();
  }

  private showError(error: any): void {
    this.message = error.message;
  };

  public recipes: Recipe[];
  public message: string;

  private getRecipeById(recipeId: string): void {
    this.message = 'Searching for your recipe';
    this.eatrDataService
      .getRecipeById(recipeId)
      .then(foundRecipes => {
        this.recipes = foundRecipes[0];
        this.message = !foundRecipes ? '' : 'No recipes found';
      });
  }

}
