import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-edit', component: FormEditComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
