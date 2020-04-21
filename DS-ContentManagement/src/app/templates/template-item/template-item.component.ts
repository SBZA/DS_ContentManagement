import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet, Router } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Template } from 'src/models/template';
<<<<<<< Updated upstream
=======
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'template-item-delete-item-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) {}
    onNoClick(): void {
      this.dialogRef.close();
    }

>>>>>>> Stashed changes
}
