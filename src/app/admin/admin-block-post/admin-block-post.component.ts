import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/services/Model/postmodel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-block-post',
  templateUrl: './admin-block-post.component.html',
  styleUrls: ['./admin-block-post.component.scss']
})
export class AdminBlockPostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

    post : Post | undefined;
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

}
