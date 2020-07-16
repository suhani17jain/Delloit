import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './display-list/display-list.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  {path:'todoList', component:DisplayListComponent},
  {path:'overview', component:OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
