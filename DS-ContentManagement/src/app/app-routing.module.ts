import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateItemComponent } from './templates/template-item/template-item.component';
import { TemplatesComponent } from './templates/templates.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'templates',
    pathMatch: 'full'
  },
  {
    path: 'templates/template-item/:templateID',
    component: TemplateItemComponent,
  },
  {
    path: 'templates',
    component: TemplatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
