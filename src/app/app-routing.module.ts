import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'products', component: ProductsPageComponent },
      { path: 'product-page', component: ProductPageComponent },
      { path: 'product-info/:id', component: ProductInfoComponent },
      { path: 'contacts', component: ContactsPageComponent },
    
      // { path: 'product-info/:id', component: PhoneInfoComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
