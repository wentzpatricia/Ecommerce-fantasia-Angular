import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCart } from '../model/productsCart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: URL = new URL('http://localhost:3000');

  constructor(private _httpClient: HttpClient) {
    if (!environment.production && environment.host && environment.port) {
      this.API.protocol = 'http';
      this.API.port = environment.port;
      this.API.host = environment.host;
    }
  }

  getProducts(): Observable<ProductCart[]> {
    return this._httpClient.get<ProductCart[]>(`${this.API.href}products`);
  }

  getProductsById(id: string | null): Observable<ProductCart> {
    return this._httpClient.get<ProductCart>(`${this.API.href}products/${id}`);
  }
}
