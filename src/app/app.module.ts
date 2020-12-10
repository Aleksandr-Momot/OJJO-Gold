import { CustomMaterialModule } from './material/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingComponent } from './landing/landing.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ProductInfoComponent } from './shared/components/product-info/product-info.component';
import { ProductPageComponent } from './shared/components/product-page/product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductsPageComponent,
    LandingComponent,
    ProductPageComponent,
    ProductInfoComponent,
    ContactsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class ToolbarOverviewExample {}