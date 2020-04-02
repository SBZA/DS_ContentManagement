import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet, Router } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Template } from 'src/models/template';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {
  templateID: string;
  paramID = 'templateID';
  hide = true;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  template: Template;
  constructor(
    private route: ActivatedRoute,
    private templateService: TemplateService,
    fb: FormBuilder
    ) {
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
      this.template = templateService.initializeTemplate();
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.templateID = params[this.paramID];
      this.templateService.getTemplateWithID(this.templateID).subscribe(
        (template: Template) => {
          this.template = template;
        }
      );
    });
  }

  update() {
    this.templateService.createTemplate(this.template)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
  }

  delete() {
    this.templateService.deleteTemplate(this.template)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
  }
}
