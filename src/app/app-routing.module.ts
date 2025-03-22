import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './Component/pipe/pipe.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { TemplateFormComponent } from './Component/Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Component/Form/reactive-form/reactive-form.component';

const routes: Routes = [
 { path: 'pipe',component:PipeComponent},
 { path: 'Data-Binding',component:DataBindingComponent},
 {path:'TemplateForm',component:TemplateFormComponent},
 { path:'reactivefrom',component:ReactiveFormComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
