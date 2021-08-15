import { AppRoutingModule } from './app-routing.module';

import { FollowersService } from './services/followers.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersDetailsComponent } from './followers-details/followers-details.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PostsComponent,
    FollowersComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FollowersDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostService, FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
