import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ListcartsComponent } from './components/listcarts/listcarts.component';
import { CrearItemModule } from './module/crear-item.module';
import { CrearItemComponent } from './components/crear-item/crear-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcartsComponent,
    CrearItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CrearItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
