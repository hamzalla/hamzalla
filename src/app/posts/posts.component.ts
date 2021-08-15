import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

//Cannot find module '@angular/http' or its corresponding type declarations.ts(2307)
//npm install @angular/http@latest


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  status = true;
  posts : any;

  //variable kandiro biha dataBinding fel html
  post = {
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
  };
  constructor(private postService: PostService) { 
 
  }
  ngOnInit() {
    this.getPosts();
  }
  getPosts(){
    this.postService.getAll().subscribe(
      Posts => this.posts = Posts, 
      error => {
        alert("Unexpected error");
        console.log(error);
    })
  }
  createPost(){
    this.postService.create(this.post).subscribe(Posts => { 
      this.post.id = Posts.id;
      //this.posts.push(this.post); //in the end of the array
      this.posts.unshift(this.post); //in the end of the array

      //empty the fields
      this.post = {
        "userId": 0,
        "id": 0,
        "title": "",
        "body": ""
      };
    }, (error: Response)  => {
      if(error.status === 400) { //bad request
        alert("bad request");
      }
      alert("unexpected error");
    });
  }
  editPost(Post){
    this.post = Post;
    this.status = false;
  }
  updatePost(){
    this.postService.update(this.post).subscribe(
      data => {
        //empty the fields
        this.post = {
          "userId": 0,
          "id": 0,
          "title": "",
          "body": ""
        };
        this.status = true;
    }, 
      (error: Response)  => {
        if(error.status === 404) {
          alert("record already deleted");
        } else if(error.status === 400) {
          alert("bad request");
        } else {
          alert("unexpected error");
        } 
    });
  }
  deletePost(Post){
    this.postService.delete(this.post).subscribe(
      data => {
        let index = this.posts.indexOf(Post);
        this.posts.splice(index, 1);
    }, 
      (error: Response)  => {
        if(error.status === 404) {
          alert("record already deleted");
        } else {
          alert("unexpected error");
        }
    });
  }
}
