import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/services/Model/postmodel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor
  (
    private postService: PostService
  ) { }

  posts: Post[] = [];


  ngOnInit(): void {
    this.postService.GetAllPost()
    .subscribe(
      response =>{
        this.posts = response
        console.log(response); 
      }
    )
  }
}
