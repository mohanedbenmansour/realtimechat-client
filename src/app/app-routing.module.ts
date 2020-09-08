import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MerchantPageComponent } from './components/merchant-page/merchant-page.component';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ChatComponent } from './components/chat/chat.component';
import { ViewPostMerchantComponent } from './components/view-post-merchant/view-post-merchant.component';
import { ViewPostClientComponent } from './components/view-post-client/view-post-client.component';
import { ViewPostAdminComponent } from './components/view-post-admin/view-post-admin.component';
import { ViewUsersAdminComponent } from './components/view-users-admin/view-users-admin.component';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'adminPage',
    component: AdminPageComponent,
    //canActivate: [AuthGuard],
    children: [{ path: '', component: ViewPostAdminComponent }],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'clientPage',
    component: ClientPageComponent,
    children: [{ path: '', component: ViewPostClientComponent }],

    //canActivate: [AuthGuard],
    data: {
      role: 'CLIENT',
    },
  },
  {
    path: 'clientPage',
    component: ClientPageComponent,
    children: [{ path: 'messages', component: ChatComponent }],

    //canActivate: [AuthGuard],
    data: {
      role: 'CLIENT',
    },
  },
  {
    path: 'merchantPage',
    component: MerchantPageComponent,
    children: [{ path: '', component: AddPostComponent }],
    data: {
      role: 'MERCHANT',
    },
  },
  {
    path: 'merchantPage',
    component: MerchantPageComponent,
    children: [{ path: 'messages', component: ChatComponent }],
    data: {
      role: 'MERCHANT',
    },
  },
  {
    path: 'merchantPage',
    component: MerchantPageComponent,
    children: [{ path: 'myposts', component: ViewPostMerchantComponent }],
    data: {
      role: 'MERCHANT',
    },
  },
  {
    path: 'admin',
    component: MerchantPageComponent,
    children: [{ path: 'viewposts', component: ViewPostAdminComponent }],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'admin',
    component: MerchantPageComponent,
    children: [{ path: 'viewusers', component: ViewUsersAdminComponent }],
    data: {
      role: 'ADMIN',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
