import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HuaweiComponent } from './components/huawei/huawei.component';
import { HashCodeComponent } from './components/hash-code/hash-code.component';
import { HttpClientModule } from '@angular/common/http';
import { SolidComponent } from './components/solid/solid.component';
import { ReflectieComponent } from './components/reflectie/reflectie.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HuaweiComponent,
    HashCodeComponent,
    SolidComponent,
    ReflectieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
