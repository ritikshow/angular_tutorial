import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent {
  isUserLoggedIN: boolean = false;
  loggerUserName : string ="Ritik"

    
}
