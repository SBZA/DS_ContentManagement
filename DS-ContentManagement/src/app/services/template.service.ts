import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  baseUrl = 'content-domain-dev.app.ose.standardbank.co.za/content-management-config-service/templates/';
  getUrl = 'get';
  createUrl = 'create';
  deleteUrl = 'delete';
  getWithIDUrl = 'id/';
  requestUrl = '';
  constructor(
    private http: HttpClient
  ) { }

  getAllTemplates() {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.getUrl;
    return this.http.get(this.requestUrl);
  }

  getTemplateWithID(id: string) {
    this.resetRequestUrl();
    this.requestUrl = this.baseUrl + this.getWithIDUrl + id;
    return this.http.get(this.requestUrl);
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
}
