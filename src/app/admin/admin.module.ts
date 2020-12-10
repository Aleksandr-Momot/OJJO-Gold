import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './../material/custom-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
    OrdersPageComponent,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {path: 'create', component: CreatePageComponent},
          {path: 'dashboard',component: DashboardPageComponent},
          {path: 'orders',component: OrdersPageComponent},
          {path: 'product/:id/edit',component: EditPageComponent},
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [ ],
})
export class AdminModule {}
