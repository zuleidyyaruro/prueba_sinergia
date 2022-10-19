import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TercerosModule } from './terceros/terceros.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedMaterialModule } from './terceros/components/shared-material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TercerosModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
