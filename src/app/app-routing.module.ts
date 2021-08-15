import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { FollowersDetailsComponent } from './followers-details/followers-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
    {
      path : "home", 
      component : HomeComponent
    },  {
      path : "posts", 
      component : PostsComponent
    },
    {
      path : "followers", 
      component : FollowersComponent
    },
    {
      path : "followers-details/:username/:id", 
      component : FollowersDetailsComponent
    },
    {
      path : "**", 
      component : NotFoundComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule{ }
