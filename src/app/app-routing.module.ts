import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'band-member-create', loadChildren: './pages/band-member-create/band-member-create.module#BandMemberCreatePageModule' },
  { path: 'band-member-detail', loadChildren: './pages/band-member-detail/band-member-detail.module#BandMemberDetailPageModule' },
  { path: 'band-member-list', loadChildren: './pages/band-member-list/band-member-list.module#BandMemberListPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
