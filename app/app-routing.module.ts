import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAllComponent } from './student-all/student-all.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {path:'all',component:StudentAllComponent},
  {path:'add',component:StudentCreateComponent},
  {path:'edit/:id',component:StudentEditComponent},
  {path:'',redirectTo:'all',pathMatch:'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
