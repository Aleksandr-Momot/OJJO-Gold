import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ProductPageComponent } from './shared/components/product-page/product-page.component';
import { ProductInfoComponent } from './shared/components/product-info/product-info.component';

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

  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
