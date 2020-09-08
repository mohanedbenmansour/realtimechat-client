import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { MerchantPageComponent } from './components/merchant-page/merchant-page.component';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

//toastr
import { ToastrModule } from 'ngx-toastr';
//http client
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostMerchantComponent } from './components/view-post-merchant/view-post-merchant.component';
import { ViewPostClientComponent } from './components/view-post-client/view-post-client.component';
//font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageService } from './service/message.service';
import { ViewPostAdminComponent } from './components/view-post-admin/view-post-admin.component';
import { ViewUsersAdminComponent } from './components/view-users-admin/view-users-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminPageComponent,
    MerchantPageComponent,
    ClientPageComponent,
    NavbarComponent,
    HomePageComponent,
    ChatComponent,
    AddPostComponent,
    ViewPostMerchantComponent,
    ViewPostClientComponent,
    ViewPostAdminComponent,
    ViewUsersAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
