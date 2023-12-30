import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  private BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

 
  signup(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/inlaze/auth/signup`, user)
  }
  
  signin(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/inlaze/auth/signin`, user)
  }

  getPostUser(id: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}/inlaze/user/${id}`)
  }

  getProfileUser(fullname: string): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/inlaze/user/fullname/${fullname}`)
  }
  
  updatePost(id: string, user: User): Observable<User>{
    return this.http.put<User>(`${this.BASE_URL}/inlaze/user/${id}`, user)
  }
}