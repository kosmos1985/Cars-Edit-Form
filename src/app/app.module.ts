import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { DesctriptionComponent } from './desctription/desctription.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [AppComponent, CarComponent, HomeComponent, PageNotFoundComponent, FormComponent, DesctriptionComponent, FormEditComponent, EditComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule,ReactiveFormsModule, BrowserAnimationsModule,MatDialogModule,MatFormFieldModule,MatButtonModule,MatAutocompleteModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
