import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private followersService: FollowersService) { }
  followers: any;

  getFollowers(){
    this.followersService.getAll().subscribe(
      data => this.followers = data,
      error => {
        alert("error");
      } 
    );
  }
  
  ngOnInit() {
    this.getFollowers();
  }


}
