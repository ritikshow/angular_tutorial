import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './Component/pipe/pipe.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { TemplateFormComponent } from './Component/Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Component/Form/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetDataComponent } from './Component/GetData/get-data/get-data.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DataBindingComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
