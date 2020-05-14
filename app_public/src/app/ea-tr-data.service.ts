import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingList } from './shoppingList';

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

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
}
}
