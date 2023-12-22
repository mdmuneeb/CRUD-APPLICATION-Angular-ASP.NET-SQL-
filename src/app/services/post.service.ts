import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from './Model/postmodel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor
  (
    private http: HttpClient
  ) { }

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
}
