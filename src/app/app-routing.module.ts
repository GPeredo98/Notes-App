import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommingComponent } from './pages/comming/comming.component';

const routes: Routes = [
  {
    path: "",
    component: CommingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
