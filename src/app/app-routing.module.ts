import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './Component/pipe/pipe.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';

const routes: Routes = [
 { path: 'pipe',component:PipeComponent},
 { path: 'Data-Binding',component:DataBindingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
