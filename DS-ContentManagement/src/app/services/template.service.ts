import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Template } from 'src/models/template';

@Injectable({
  providedIn: 'root'
})

export class TemplateService {


  baseUrl = 'https://content-domain-dev.app.ose.standardbank.co.za/content-management-config-service/templates/';
  getUrl = 'get';
  createUrl = 'create';
  deleteUrl = 'delete';
  getWithIDUrl = 'id/';
  requestUrl = '';

  httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      Authorization: 'dummyAuth',
      content: 'application/json',
      'Access-Control-Allow-Origin': 'false'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  getAllTemplates() {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.getUrl;
    console.log('Request URL is '  + this.requestUrl);
    return this.http.get<Template[]>(this.requestUrl);
  }

  getTemplateWithID(id: string) {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.getWithIDUrl + id.trim();
    console.log('Request is ' + this.requestUrl);
    return this.http.get(this.requestUrl, this.httpOptions);
  }

  createTemplate(template) {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.createUrl;
    return this.http.post(this.requestUrl, template);
  }

  deleteTemplate(template) {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.createUrl;
    return this.http.delete(this.requestUrl, template);
  }

  resetRequestUrl() {
    this.requestUrl = '';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
