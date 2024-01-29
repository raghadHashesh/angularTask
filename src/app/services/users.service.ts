import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(pagenum: number): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users?page=${pagenum}`).pipe(
      map(res => {
        let modal = {
          pageNumber: res.page,
          users: res.data
        }
        return modal
      })
    );
  }

  getUserInfo(id: number): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }
}
