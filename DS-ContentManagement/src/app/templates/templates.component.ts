import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { Template } from 'src/models/template';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  displayedColumns: string[] = ['template_def_id', 'description', 'template_name'];
  templateCollection: Template[];
  sortedTemplates: Template[];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private templateService: TemplateService
  ) {
    this.getAllTemplates();
  }

  ngOnInit(): void {

  }

  getAllTemplates() {
    this.templateService.getAllTemplates().
    subscribe(
      (templates: Template[]) => {
        this.templateCollection = {... templates};
        this.dataSource = new MatTableDataSource(templates);
        this.dataSource.paginator = this.paginator;
        //this.sortedTemplates = this.templateCollection.slice();
      },
      error => {
        console.log(error);
      }
    );
  }

  getTemplateWithID(id: string) {
    this.templateService.getTemplateWithID(id).subscribe(
      template => {
        console.log(template);
      }
    );
  }

  createTemplate(template) {
    this.templateService.createTemplate(template).subscribe(
      updateFromCreate => {
        console.log(updateFromCreate);
      }
    );
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
  }

  sortData(sort: Sort) {
    const data = this.templateCollection.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTemplates = data;
      return;
    }

    this.sortedTemplates = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'template_def_id': return compare(a.template_def_id, b.template_def_id, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'template_name': return compare(a.template_name, b.template_name, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
