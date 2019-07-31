import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComprasPage } from './compras.page';
import {
    MatButtonModule,
    MatDatepickerModule, MatExpansionModule, MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule
} from "@angular/material";

const routes: Routes = [
  {
    path: '',
    component: ComprasPage
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
  declarations: [ComprasPage]
})
export class ComprasPageModule {}
