import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BandMemberCreatePage } from './band-member-create.page';

const routes: Routes = [
  {
    path: '',
    component: BandMemberCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BandMemberCreatePage]
})
export class BandMemberCreatePageModule {}
