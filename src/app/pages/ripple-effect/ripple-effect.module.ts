import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RippleEffectPage } from './ripple-effect.page';

const routes: Routes = [
  {
    path: '',
    component: RippleEffectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RippleEffectPage]
})
export class RippleEffectPageModule {}
