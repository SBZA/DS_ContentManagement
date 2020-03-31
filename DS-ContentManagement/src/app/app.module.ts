import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import { TemplatesComponent } from './templates/templates.component';
import { TemplateItemComponent } from './templates/template-item/template-item.component';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplatesComponent,
    TemplateItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
