import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EditEmployeesComponent } from './edit-employees/edit-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
