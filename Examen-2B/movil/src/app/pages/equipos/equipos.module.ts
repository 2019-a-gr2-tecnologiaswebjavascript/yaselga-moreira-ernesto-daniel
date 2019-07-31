import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EquiposPage } from './equipos.page';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from "@angular/material";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: EquiposPage
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
      RouterModule.forChild(routes)
  ],
  declarations: [EquiposPage]
})
export class EquiposPageModule {}
