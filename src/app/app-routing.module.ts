import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './Component/pipe/pipe.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { TemplateFormComponent } from './Component/Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Component/Form/reactive-form/reactive-form.component';
import { GetDataComponent } from './Component/GetData/get-data/get-data.component';
import { NgTemplateComponent } from './Component/Directive/ng-template/ng-template.component';
import { ReactiveFromAdvanceComponent } from './Component/Form/Reactive_form_advance/reactive-from-advance/reactive-from-advance.component';

const routes: Routes = [
 {path: 'pipe',component:PipeComponent},
 {path: 'Data-Binding',component:DataBindingComponent},
 {path:'TemplateForm',component:TemplateFormComponent},
 {path:'reactivefrom',component:ReactiveFormComponent},
 {path:'getdata',component:GetDataComponent},
 {path:"ngtemplate",component:NgTemplateComponent},
 {path:'reactiveformAdvance',component:ReactiveFromAdvanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
