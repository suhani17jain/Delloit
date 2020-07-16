import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MakeTodoListComponent } from './make-todo-list/make-todo-list.component';
import { OverviewComponent } from './overview/overview.component'
import { DisplayListComponent } from './display-list/display-list.component'
import { ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MakeTodoListComponent,
    OverviewComponent,
    DisplayListComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
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
