import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getAllUser(): Observable <User[]> {
    return this.http.get<User[]>(this.urlAPI);
  }

  getUserById(id: number): Observable <User>{
    return this.http.get<User>(this.urlAPI+id);
  }
  addUser(user: User): Observable <User>{
    return this.http.post<User>(this.urlAPI, user);
  }

  updateUser(user: User): Observable <User>{
    return this.http.put<User>(this.urlAPI+user.id, user);
  }

  removeUser(id: number | undefined): Observable <User>{
    return this.http.delete<User>(this.urlAPI+id)
  }

}
