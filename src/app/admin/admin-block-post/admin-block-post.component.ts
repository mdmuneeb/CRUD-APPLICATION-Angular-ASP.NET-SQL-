import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/services/Model/postmodel';
import { UpdatePostRequest } from 'src/app/services/Model/update-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-block-post',
  templateUrl: './admin-block-post.component.html',
  styleUrls: ['./admin-block-post.component.scss']
})
export class AdminBlockPostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

    post : any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id = params.get('id')
        if (id){
          this.postService.GetPostById(id).
          subscribe(response =>
            {
              this.post = response;
              console.log(response);
              
            });
        }
      }
    )
    
  }
  
  onSubmit()
  {
    const updatePostRequest: UpdatePostRequest={
      author: this.post?.author,
      id: this.post?.id,
      title: this.post?.title,
      context: this.post?.context,
      summary: this.post?.summary,
      urlHandle: this.post?.urlHandle,
      visible: this.post?.visible,
      publishDate: this.post?.publishDate,
      updatedDate: this.post?.updatedDate,
      featuredImageUrl: this.post?.featuredImageUrl
    }

    this.postService.UpdatePost(this.post?.id, updatePostRequest)
    .subscribe((res)=>
    {
      alert("Success");
    })
  }
  Delete()
  {
    this.postService.DeletePost(this.post.id).
    subscribe((res) =>
    {
      alert("Deleted Successfully!!!!");
      this.router.navigate(['admin/posts']);
    })
  }
}
