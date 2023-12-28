import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddPostRequest } from 'src/app/services/Model/add-post.model';
import { Post } from 'src/app/services/Model/postmodel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  post : AddPostRequest = {
    author: '',
    context: '',
    featuredImageUrl: '',
    publishDate: '',
    summary: '',
    title: '',
    updatedDate: '',
    urlHandle: '',
    visible: true 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.postService.AddPost(this.post)
    .subscribe((res) =>{
      alert("Successfully Posted !!!");
      form.resetForm()
    })
  }

}
