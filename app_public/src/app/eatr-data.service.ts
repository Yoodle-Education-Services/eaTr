import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chef, Recipe, Ingredients } from './chef';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EatrDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api'; // change to this after it is functional => environment.apiBaseUrl;

 /*  public getChef(): Promise<Chef[]> {
    const url: string = `${this.apiBaseUrl}/chef/5ec30d3a93f206389c58748c`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Chef[])
      .catch(this.handleError);
  } */

 /* 
  //do a for loop to get all recipes within each chef.
  public getRecipesByChef() {
    var chefs = this.getChefs ()
    var recipes = []
    chefs.forEach(chef => {
      recipes.concat(chef._id)
      return recipes
    });
  } */

  /* public getChef(): Promise<Chef[]> {
    const url: string = `${this.apiBaseUrl}/chef/5ec30d3a93f206389c58748c`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Chef)
      .catch(this.handleError);
  }

  public getRecipeByChefId(chefId: string): Promise<Recipe> {
    const url: string = `${this.apiBaseUrl}/chef/${chefId}/recipes`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  } */

  public addRecipeByChefId(chefId: string, formData: Recipe): Promise<Recipe> {
    const url: string = `${this.apiBaseUrl}/chef/5ec30d3a93f206389c58748c/recipes`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public getRecipes(/* chefId: string */): Promise<Recipe[]> {
    const url: string = `${this.apiBaseUrl}/chef/5ec30d3a93f206389c58748c/recipes`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Recipe[])
      .catch(this.handleError);
  }

  public getRecipeById(recipeId: string): Promise<Recipe> {
    const url: string = `${this.apiBaseUrl}/chef/5ec30d3a93f206389c58748c/recipes/${recipeId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Recipe)
      .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
