import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiResponse } from '@seamless/transfer-money/models/api-response.interface';


@Injectable()
export class ApiService {

  protected url = 'http://localhost:2400';

  constructor(protected http: HttpClient) {}

  public getBalance(): Observable<ApiResponse> {
    return this.makeGet(`${this.url}/balance`) as Observable<ApiResponse>;
  }

  public getBank(iban: string): Observable<ApiResponse> {
    return this.makeGet(`${this.url}/bank/${iban}`);
  }

  public transfer(iban, formData): Observable<ApiResponse> {
    return this.makePost(`${this.url}/transer/${iban}`, formData);
  }

  protected makeGet<ApiResponse>(url: string, headerOptions: HttpParams = null): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(url, {
      headers: new HttpHeaders({
        ...headerOptions
      })
    });
  }

  protected makePost<ApiResponse>(url: string, body = {}, headerOptions: HttpParams = null): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(url, body, {
      headers: new HttpHeaders({
        ...headerOptions
      })
    });
  }

}
