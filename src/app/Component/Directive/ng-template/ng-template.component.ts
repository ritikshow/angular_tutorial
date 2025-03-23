import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent {
  isUserLoggedIN: boolean = true;
  loggerUserName : string ="Ritik"

    @ViewChild('dynaicTem') dyanTemplate :TemplateRef<any> |undefined;
    @ViewChild('dyanamicContainer',{read:ViewContainerRef}) dyanamicContainer :ViewContainerRef |undefined;
  loadTemplate(){
    if(this.dyanTemplate){
      this.dyanamicContainer?.createEmbeddedView(this.dyanTemplate)
    }
  }
}
