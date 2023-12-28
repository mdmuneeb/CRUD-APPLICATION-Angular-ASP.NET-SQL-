import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from './Model/postmodel';
import { Observable} from 'rxjs';
import { UpdatePostRequest } from './Model/update-post.model';
import { AddPostRequest } from './Model/add-post.model';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor
  (
    private http: HttpClient
  ) { }

  // https://localhost:7116
    apiBaseUrl = environment.apiBaseUrl;
    data : any;

  GetAllPost(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/posts')

  }

  GetPostById(id:string): Observable <Post>
  {
    return this.http.get<Post>(this.apiBaseUrl+'/api/posts/'+id)
  }

  UpdatePost(id:string, updatePostRequest: UpdatePostRequest): Observable <Post>
  {
    return this.http.put<Post>(this.apiBaseUrl+'/api/posts/'+id, updatePostRequest)
  }

  DeletePost(id:string): Observable<Post>
  {
    return this.http.delete<Post>(this.apiBaseUrl+'/api/posts/'+id);
  }

  AddPost(addPostRequest:AddPostRequest) : Observable <Post>
  {
    return this.http.post<Post>(this.apiBaseUrl+'/api/posts', addPostRequest);
  }
}
