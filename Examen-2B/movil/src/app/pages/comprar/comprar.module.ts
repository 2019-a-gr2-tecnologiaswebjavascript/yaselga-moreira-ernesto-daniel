import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComprarPage } from './comprar.page';

import {
    MatButtonModule,
    MatDatepickerModule, MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatExpansionModule
} from "@angular/material";

const routes: Routes = [
  {
    path: '',
    component: ComprarPage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      MatInputModule,
      MatMenuModule,
      MatButtonModule,
      MatDatepickerModule,
      MatRadioModule,
      MatNativeDateModule,
      MatIconModule,
      MatExpansionModule,
      RouterModule.forChild(routes)
  ],
  declarations: [ComprarPage]
})
export class ComprarPageModule {}
