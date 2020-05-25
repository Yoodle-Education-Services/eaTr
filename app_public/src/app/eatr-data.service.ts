import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingList, Recipe, Chef } from './shoppingList';

@Injectable({
  providedIn: 'root'
})
export class EaTrDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getShoppingList(): Promise<ShoppingList[]> {
    const url: string = `${this.apiBaseUrl}/shoppingList?`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ShoppingList[])
      .catch(this.handleError);
}

  public getChefById(chefId: string): Promise<Chef> {
    const url: string = `${this.apiBaseUrl}/chef/${chefId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Chef)
      .catch(this.handleError);
}

  public getRecipeById(chefId: string, recipeId: string): Promise<Recipe> {
    const url: string = `${this.apiBaseUrl}/chef/5ec336a5773f4a06c00a9c7f/recipe/5ec336a5773f4a06c00a9c7f`;
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
