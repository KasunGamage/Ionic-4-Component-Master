import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SkeletonTextPage } from './skeleton-text.page';

const routes: Routes = [
  {
    path: '',
    component: SkeletonTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SkeletonTextPage]
})
export class SkeletonTextPageModule {}
