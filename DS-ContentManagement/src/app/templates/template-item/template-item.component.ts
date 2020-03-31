import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet, Router } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {
  templateID: string;
  paramID = 'templateID';
  hide = true;
  constructor(
    private route: ActivatedRoute,
    private templateService: TemplateService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.templateID = params[this.paramID];
      this.templateService.getTemplateWithID(this.templateID).subscribe(
        template => {
          console.log(template);
        }
      )
      console.log('Template ID is ' + this.templateID);
    });
  }

}
