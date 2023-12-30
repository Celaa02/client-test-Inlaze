import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPots(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.BASE_URL}/inlaze/post`)
  }
  getPost(id: string): Observable<Post>{
    return this.http.get<Post>(`${this.BASE_URL}/inlaze/post/${id}`)
  }
  createPost(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.BASE_URL}/inlaze/post/create`, post)
  }
  deletePost(id: string): Observable<Post>{
    return this.http.delete<Post>(`${this.BASE_URL}/inlaze/post/${id}`)
  }
  updatePost(id: string, post: Post): Observable<Post>{
    return this.http.put<Post>(`${this.BASE_URL}/inlaze/post/${id}`, post)
  }
  foundLikeTitle(title: string): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.BASE_URL}/inlaze/post/title/${title}`)
  }

  foundLikeContent(content: string): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.BASE_URL}/inlaze/post/content/${content}`)
  }

  likePost(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.BASE_URL}/inlaze/post/like`, post)
  }
}
