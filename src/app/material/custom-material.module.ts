import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
// import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatProgressBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    // QuillModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    LayoutModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    // QuillModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    LayoutModule,
    MatTabsModule,
  ],
})
export class CustomMaterialModule {}
